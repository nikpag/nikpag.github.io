#!/usr/bin/env python3
"""Check that no anonymized system name leaks onto the website or the CV.

Papers under double-blind review are submitted under a different system name
from the public one (MLSys and NSDI both require it). papers.bib records that
name in `submission_title`; this script takes the system name (the part before
the colon) of every such title and fails if it appears in the built site or in
the CV PDF.

Usage: anoncheck.py BIB SITE_DIR PDF [PDF ...]
"""

import re
import subprocess
import sys
from pathlib import Path


def system_names(bib_text):
    names = set()
    for title in re.findall(r"submission_title\s*=\s*\{(.*)\},?\s*$", bib_text, re.M):
        name = title.split(":", 1)[0].replace("{", "").replace("}", "").strip()
        if name:
            names.add(name)
    return sorted(names)


def pattern_for(name):
    # Whole-word match, so e.g. "Crossfade" doesn't hit "getCrossfadeParameters"
    # in bundled JavaScript.
    return re.compile(r"(?<![A-Za-z0-9_])" + re.escape(name) + r"(?![A-Za-z0-9_])", re.I)


def main():
    if len(sys.argv) < 4:
        sys.exit(__doc__.strip().splitlines()[-1])
    bib, site, pdfs = Path(sys.argv[1]), Path(sys.argv[2]), [Path(p) for p in sys.argv[3:]]

    names = system_names(bib.read_text())
    if not names:
        print("anoncheck: no submission_title in the bib, nothing to check")
        return
    patterns = {name: pattern_for(name) for name in names}

    sources = []
    for path in sorted(site.rglob("*")):
        if path.is_file():
            try:
                sources.append((path, path.read_text(errors="strict")))
            except (UnicodeDecodeError, OSError):
                pass  # binary file
    for pdf in pdfs:
        text = subprocess.run(["pdftotext", str(pdf), "-"], check=True, capture_output=True, text=True).stdout
        sources.append((pdf, text))

    leaks = []
    for path, text in sources:
        for name, pat in patterns.items():
            for m in pat.finditer(text):
                line = text.count("\n", 0, m.start()) + 1
                leaks.append(f"{path}:{line}: {name}")

    if leaks:
        print("anoncheck: anonymized system names found:")
        print("\n".join(f"  {leak}" for leak in leaks))
        sys.exit(1)
    print(f"anoncheck: OK ({', '.join(names)} not found in {len(sources)} files)")


if __name__ == "__main__":
    main()

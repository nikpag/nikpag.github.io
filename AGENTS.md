# Project Instructions

When working in this repository, use the conda environment named `website`.

Run site commands through `conda run -n website`, for example:

```bash
conda run -n website bundle exec jekyll build --destination /tmp/nikpag-site-build
conda run -n website bundle exec jekyll serve
```

Prefer `conda run -n website ...` over `conda activate website` because Codex commands run in separate shell invocations.

When making LaTeX changes, compile the relevant LaTeX document after editing, then render the resulting PDF and visually inspect it to confirm the change was applied. For the CV, run:

```bash
conda run -n website make -C cv
```

If compilation fails because of local environment issues, report the exact failure.

Publications are dated and ordered by `_bibliography/papers.bib` (newest first), and the CV lists them in the same order. After adding or changing a paper, use the `organizepubs` skill (`.claude/skills/organizepubs`, `.agents/skills/organizepubs`).

Papers under double-blind review are submitted under a different system name, recorded in `submission_title` in `_bibliography/papers.bib`. After changing publications, the CV or anything that shows paper titles, run `conda run -n website make anoncheck`: it builds the site and the CV and fails if any of those anonymized system names appears in either.

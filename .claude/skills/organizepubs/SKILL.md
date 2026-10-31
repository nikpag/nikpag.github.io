---
name: organizepubs
description: Organizes publications on the website and CV. Checks every entry in _bibliography/papers.bib against arXiv or the venue's own site and fixes its title and year/month/day, formats and sorts the bib newest first, then reorders the CV's Publications section to match. Use when adding or updating a paper, or when asked to sort, re-date or sync publications.
---

# Organize publications

`_bibliography/papers.bib` is the single source of truth. The website lists papers in its order on the publications page (`_pages/publications.md`) and on the homepage (`_includes/selected_papers.html`, which leaves out under-submission papers), using jekyll-scholar's `sort_by: year, month, day` in `_config.yml`, and the Publications section of `cv/main.tex` must list them in the same order. The order is by date, newest first.

**Under submission.** An entry with `under_submission = {true}` has no date (no `year`, `month` or `day`), no venue and no `abbr` (the website draws its chip from the flag). It goes after all dated papers, both in the bib and on the CV. Its authors stay in the bib, but neither the website nor the CV shows authors or a venue for it: the homepage leaves it out, and the publications page shows it after the year groups, under its own gray "Submitted" heading in place of a year, a "Submitted" venue chip, and "Under Submission" in place of the authors (`_pages/publications.md`, `_layouts/bib.html`); the CV item has only `\paperTitle{…}` and `\underSubmission`, with no `\authors` or `\venue` line, not even commented out. Every other entry must have a `year`: an undated entry without the flag breaks the website build (jekyll-scholar groups by year). When a paper is accepted or posted, remove the flag and give it a date like any other entry.

## 1. Fix the dates

For every entry in `papers.bib` except under-submission ones, find the authoritative date and set `year`, `month` (bare three-letter macro, e.g. `apr`) and `day` (two digits, e.g. `{09}`):

- **Published at a venue** (journal, conference or workshop; the entry has a `journal`, `booktitle` or venue `note`): use the venue's own date, from its official page: the issue date for a journal, the event date for a conference or workshop. This holds even when the paper also has an arXiv version, which is often posted later, and for a paper that's accepted at an event that hasn't happened yet. If the venue gives only a month (e.g. a journal issue), set `year` and `month` and remove `day` rather than inventing one.
- **arXiv-only preprint:** use the v1 submission date ("Submitted on" on the abstract page), the `<published>` field of
  `curl -s "https://export.arxiv.org/api/query?id_list=<id1>,<id2>,..."` (one call for all IDs). Not `<updated>`, which is the latest version.

Also check each entry's `title` against the same source (the arXiv `<title>`, or the venue page) and make it match exactly, in the bib and in the CV.

Don't trust dates already in the file, and don't take dates from Google Scholar or blog posts. Report each date you changed, with its source, to the user. If an authoritative date can't be found, leave the entry as is and say so.

## 2. Format and sort the bib

Run from the repo root (`bibtex-tidy` is pinned in `package.json`; run `npm install` first if `node_modules` is missing):

```bash
npx bibtex-tidy _bibliography/papers.bib --modify --align=14 --blank-lines --months --space=2 --trailing-commas \
  --sort-fields=abbr,abstract,archiveprefix,arxiv,author,bibtex_show,blog,booktitle,code,day,doi,eprint,html,journal,month,note,pdf,poster,preview,primaryclass,selected,slides,supp,title,under_submission,url,year \
  --sort=-year,-month,-day
```

`--sort-fields` is alphabetical; if an entry uses a field that isn't in the list, add it in alphabetical order (here and in the Codex copy of this skill, `.agents/skills/organizepubs/SKILL.md`). Undated (under-submission) entries sort last on their own. `under_submission` is longer than the alignment width, so its `=` isn't aligned; that's expected. Check `git diff` afterwards: only dates, titles, order and whitespace should change.

## 3. Reorder the CV

In `cv/main.tex`, reorder the `publicationItem` blocks inside `\begin{rSection}{Publications}` so they follow the bib order. Match each block to its bib entry by title. Under-submission entries come last, as in the bib. Each item's title links to the paper. Prefer a non-arXiv link (the venue's or publisher's page, a digital library, the venue's PDF) and use arXiv only when there is none; when a venue link appears for a paper that links to arXiv, switch it. Move whole blocks; besides titles and links, only fix what the under-submission rules above require (`\underSubmission` and no authors or venue when the bib has the flag; when the flag is removed, drop `\underSubmission` and write `\authors{…}` from the bib, with `\me` for Nikos Pagonas, plus `\venue{…}` if it has one). If a CV item has no bib entry, tell the user and offer to add one. If a bib entry has no CV item, tell the user rather than adding one. If a CV item's title differs from the authoritative title, fix it in the CV.

## 3b. Venue text

A published entry's `note` is the venue line the website shows, and the CV's `\venue{…}` must be the same text. For a conference or workshop, the bib's `abbr` (the website's venue chip, e.g. `RAAAI 2026`) is its abbreviation, and the `note` ends with it in parentheses: `NeurIPS 2026 Workshop on Resource-Aware Agentic AI (RAAAI 2026)`. If a conference or workshop entry lacks it, add it to the `note` and the CV. Journals and arXiv-only preprints don't get one. Keep the venue's full name as the user wrote it; don't rename venues.

## 4. Verify

Follow `AGENTS.md`:

```bash
conda run -n website make -C cv
conda run -n website bundle exec jekyll build --destination "$TMPDIR/nikpag-site-build"
```

`make -C cv` also copies the PDF to `assets/pdf/cv-nikolaos-pagonas.pdf`. Render the Publications page of `cv/main.pdf` (e.g. `pdftoppm -f <page> -l <page> -r 80 -png`) and look at it, and check the paper titles in the built `publications/index.html` appear in the same order, with under-submission papers at the end. Then report the final order and every date change.

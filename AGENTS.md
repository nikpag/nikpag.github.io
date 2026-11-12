# Project Instructions

The site runs on Ruby through rbenv: `.ruby-version` pins the Ruby version and `bundle install` puts the gems in `vendor/bundle` (set in the untracked `.bundle/config`). No environment needs activating; run site commands directly, for example:

```bash
bundle exec jekyll build --destination "$TMPDIR/nikpag-site-build"
make serve
```

On a fresh checkout, set it up with `rbenv install` (if that Ruby is missing), `bundle config set --local path vendor/bundle` and `bundle install`.

When making LaTeX changes, compile the relevant LaTeX document after editing, then render the resulting PDF and visually inspect it to confirm the change was applied. For the CV, run:

```bash
make -C cv
```

If compilation fails because of local environment issues, report the exact failure.

Publications are dated and ordered by `_bibliography/papers.bib` (newest first), and the CV lists them in the same order. After adding or changing a paper, use the `organizepubs` skill (`.claude/skills/organizepubs`, `.agents/skills/organizepubs`).

Papers under double-blind review are submitted under a different system name, recorded in `submission_title` in `_bibliography/papers.bib`. After changing publications, the CV or anything that shows paper titles, run `make anoncheck`: it builds the site and the CV and fails if any of those anonymized system names appears in either.

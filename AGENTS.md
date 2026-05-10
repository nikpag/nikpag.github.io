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

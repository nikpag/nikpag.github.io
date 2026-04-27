# Project Instructions

When working in this repository, use the conda environment named `website`.

Run site commands through `conda run -n website`, for example:

```bash
conda run -n website bundle exec jekyll build --destination /tmp/nikpag-site-build
conda run -n website bundle exec jekyll serve
```

Prefer `conda run -n website ...` over `conda activate website` because Codex commands run in separate shell invocations.

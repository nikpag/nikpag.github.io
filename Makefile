.PHONY: FORCE all serve anoncheck

export SHELL=/bin/bash

all: serve

serve:
	bundle exec jekyll serve

# Build the site and the CV, then check that no anonymized system name of a
# paper under double-blind review (submission_title in papers.bib) shows up.
ANONCHECK_SITE ?= $(or $(TMPDIR),/tmp)/nikpag-anoncheck-site

anoncheck:
	$(MAKE) -C cv
	bundle exec jekyll build --quiet --destination $(ANONCHECK_SITE)
	python3 bin/anoncheck.py _bibliography/papers.bib $(ANONCHECK_SITE) cv/main.pdf

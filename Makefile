.PHONY: FORCE all 

export SHELL=/bin/bash

all: serve

serve:
	bundle exec jekyll serve

.PHONY: FORCE all clean combine distclean

export SHELL=/bin/bash

TEXLIVE_BIN ?= /usr/local/texlive/2024/bin/universal-darwin
ifneq ($(wildcard $(TEXLIVE_BIN)/latexmk),)
LATEXMK ?= $(TEXLIVE_BIN)/latexmk
PATH := $(TEXLIVE_BIN):$(PATH)
export PATH
else
LATEXMK ?= latexmk
endif

FILE=main

all: $(FILE).pdf

# Using -shell-escape in `latexmk` commands
# because of the package "minted" for typesetting
# listings of code. Remove, if not needed.
%.pdf: %.tex FORCE
	PATH="$(TEXLIVE_BIN):$$PATH" $(LATEXMK) -shell-escape -pdf -f -e '$$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode %O %S/' $<
	cp main.pdf ../assets/pdf/cv-nikolaos-pagonas.pdf

clean:
	$(RM) *.{dvi,aux,log,toc,lof,lol,lot,dlog,bbl,blg,idx,out,tpt,svn}
	$(RM) *.{bcf,run.xml,synctex.gz}
	$(RM) *.{nav,snm,vrb,fls,fdb_latexmk} *~ *.bak
	$(RM) -r _minted-*/

distclean: clean
	$(RM) $(FILE).{dvi,ps,pdf} $(FILE_EN).{dvi,ps,pdf} $(FILE_GR).{dvi,ps,pdf}

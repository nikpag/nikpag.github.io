.PHONY: FORCE all clean combine distclean

export SHELL=/bin/bash

FILE=main
FILE_EN=main-en
FILE_GR=main-gr

all: $(FILE).pdf $(FILE_EN).pdf $(FILE_GR).pdf

# Using -shell-escape in `latexmk` commands
# because of the package "minted" for typesetting
# listings of code. Remove, if not needed.
%.pdf: %.tex FORCE
	latexmk -shell-escape -pdf -f -e '$$pdflatex=q/xelatex -synctex=1 -interaction=nonstopmode %O %S/' $<
	cp main.pdf ../assets/pdf/cv-nikolaos-pagonas.pdf

clean:
	$(RM) *.{dvi,aux,log,toc,lof,lol,lot,dlog,bbl,blg,idx,out,tpt,svn}
	$(RM) *.{bcf,run.xml,synctex.gz}
	$(RM) *.{nav,snm,vrb,fls,fdb_latexmk} *~ *.bak
	$(RM) -r _minted-*/

distclean: clean
	$(RM) $(FILE).{dvi,ps,pdf} $(FILE_EN).{dvi,ps,pdf} $(FILE_GR).{dvi,ps,pdf}

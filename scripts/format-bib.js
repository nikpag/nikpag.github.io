const fs = require("fs");
const path = require("path");
const tidy = require("bibtex-tidy");

const bibPath = path.join(__dirname, "..", "_bibliography", "papers.bib");

const fieldOrder = [
  "abbr",
  "abstract",
  "archiveprefix",
  "arxiv",
  "author",
  "bibtex_show",
  "blog",
  "booktitle",
  "code",
  "day",
  "doi",
  "eprint",
  "html",
  "journal",
  "month",
  "note",
  "pdf",
  "poster",
  "preview",
  "primaryclass",
  "selected",
  "slides",
  "supp",
  "title",
  "url",
  "year",
].sort();

const baseOptions = {
  align: 14,
  blankLines: true,
  months: true,
  sortFields: fieldOrder,
  space: 2,
  trailingCommas: true,
};

const original = fs.readFileSync(bibPath, "utf8");
const normalized = tidy.tidy(original, baseOptions).bibtex;
const sorted = tidy.tidy(normalized, {
  ...baseOptions,
  sort: ["-year", "-month", "-day"],
}).bibtex;

if (sorted !== original) {
  fs.writeFileSync(bibPath, sorted);
}

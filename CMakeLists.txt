cmake_minimum_required(VERSION 2.8.4)

project("Idee und Use Cases" NONE)

include(UseLATEX.cmake)

#set(LATEX_SYNCTEX_FLAGS)

add_latex_document(thesis.tex
INPUTS
title.tex
toc.tex
abbreviations.tex
tables/CodebookOverview.tex
chapters.tex
sourcecode/hello_world.c

BIBFILES thesis.bib

IMAGE_DIRS figures pictures

USE_GLOSSARY
USE_BIBLATEX
USE_INDEX
)

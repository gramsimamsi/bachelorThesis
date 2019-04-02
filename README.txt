INHALT
1. Versionshistorie
2. Anmerkungen
3. Texmaker quick build user pipeline


1. Versionshistorie

* Änderungen 29.01.2018 - JN
  - Paket glossaries-extra hinzugefügt - Abkürzungsverzeichnis
  - Paket fixltx2e entfernt - ist seit 2015 im latex-kernel integriert
  - Benutze CMake als build tool
  - Entferne Makefile
  - Benutze biber(BibLaTeX) anstelle von BiTeX

* Änderungen 9.4.2014 - SJ
  - Paket "floatrow" hinzugefügt - caption neben Bild/Tabelle
  - Hinweise zur Verwendung in chapter.tex eingefügt
  - Schriftgröße 11pt, Ränder etwas kleiner

* Änderungen 31.7.2013 - SJ
  - Paket "subfigure" veraltet, ersetzt durch "caption"/"subcaption"
  - hinzugefügte Pakete:
    + fixltx2e    - Patches für Latex
    + ellipsis    - korrigiert den Weißraum um Auslassungspunkte
    + microtype   - optischer Randausgleich etc.
    + Text "Kapitel" am Kapitelanfang entfernt

* Vorlage erstellt 16.5.2012 - SJ


2. Anmerkungen
Das Makefile wird nur benötigt, wenn man den Übersetzungsprozess manuell anstoßen will.
Bei Verwendung von MikTex oder Texmaker einfach die Hauptdatei "thesis.tex" öffnen und
diese mit den integrierten Funktionen übersetzen.


3. Texmaker quick build user pipeline
Options -> Configure Texmaker -> Quick Build -> User
Insert this line:
pdflatex -synctex=1 -interaction=nonstopmode %.tex|biber %|makeindex %.idx|makeglossaries %|pdflatex -synctex=1 -interaction=nonstopmode %.tex|pdflatex -synctex=1 -interaction=nonstopmode %.tex|evince %.pdf

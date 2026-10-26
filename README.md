# Jobify

Jobify er en React Native-prototype til studerende, som vil finde relevante studiejob.
Alle jobopslag er **fiktive demoopslag**. Appen sender ikke ansøgninger og opretter ikke en konto hos virksomheder.

## Funktioner

- Profil med studieretning og valgfri interesseområder
- Jobliste med filtrering efter profil og søgning i opslag
- Gemte job, som huskes efter appen lukkes
- Navigation i bunden mellem Jobopslag, Gemte job og Profil
- Jobdetaljer med tydelig markering af demoopslag

Profilen og listen med gemte job gemmes lokalt på brugerens enhed med AsyncStorage.
Jobopslagene ligger fortsat som mock-data i `src/data/jobs.js`.


## Hurtig gennemgang

1. Opret en profil med en studieretning og eventuelt interesser.
2. Se filtrerede opslag, søg i listen, og skift til alle opslag.
3. Gem et job, og find det under Gemte job.
4. Luk appen helt, åbn den igen, og kontrollér at profil og gemte job stadig findes.
5. Fjern jobbet fra Gemte job, og kontrollér at det også er fjernet fra detaljeskærmen.

## Struktur

- `App.js`: stack- og bundnavigation
- `src/screens/`: de fem skærme
- `src/components/JobCard.js`: genbrugt jobkort
- `src/state/JobifyContext.js`: profil, gemte job og lokal lagring
- `src/data/`: fiktive job og studieretninger
- `src/styles/`: farver og styling

## Demovideo

[Video af første iteration](https://youtube.com/shorts/GgvtLMymZlA?feature=share).
[Video af ANDEN iteration](https://youtube.com/shorts/Nk0r5TnBDhE?feature=share)


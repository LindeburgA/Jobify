# Jobify

Jobify er en mobil applikation bygget i React Native (Expo), hvor studerende kan
oprette en profil med deres studieretning, og virksomheder kan sende jobopslag
direkte til studerende inden for bestemte studieretninger.

Lavet som del af den obligatoriske opgave 1 (individuel): *Brugerinddragelse*.

## Demovideo

[Se demovideoen på YouTube](https://youtube.com/shorts/GgvtLMymZlA?feature=share)

## Funktionalitet

- **Velkomstskærm** – kort præsentation af appen med to knapper: "Opret profil"
  og "Se alle jobopslag".
- **Opret profil** – studerende indtaster navn, email og vælger deres
  studieretning (fx Datamatiker, Multimediedesigner, Markedsføringsøkonom).
- **Jobopslag** – en liste (FlatList) af jobopslag, filtreret efter den valgte
  studieretning.
- **Jobdetaljer** – fuld beskrivelse af et jobopslag med ansøgningsfrist og en
  "Ansøg nu"-knap.

## Teknisk

- **React Native** via **Expo** (`~57`)
- **React Navigation** (native stack) til navigation mellem skærme
- Al styling er samlet i `src/styles/styles.js` og `src/styles/colors.js`,
  adskilt fra skærm-komponenterne
- Mock-data for jobopslag og studieretninger ligger i `src/data/`

### Struktur

```
App.js                    # Navigation-opsætning (Stack Navigator)
src/
  screens/
    WelcomeScreen.js       # Skærm 1
    RegisterScreen.js      # Skærm 2
    JobsScreen.js           # Skærm 3 (liste over jobopslag)
    JobDetailScreen.js      # Skærm 4
  data/
    studyFields.js
    jobs.js
  styles/
    colors.js
    styles.js
```

## Brugerinddragelse

TODO: beskriv metode (interview/survey), resultater og refleksioner her eller
i den skriftlige rapport, jf. opgavebeskrivelsen.

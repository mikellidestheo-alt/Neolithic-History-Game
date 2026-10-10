# Shadows over Geneva

A film-noir decision game about international relations between the wars (1919–1939), written for
**Cambridge IGCSE History** (Core Content Option B, Key Questions 1–3: the peace treaties, the League of
Nations, and the collapse of peace) and **Cambridge International AS & A Level History** (the League of
Nations and international relations in the 1920s and 1930s).

Players choose a level and a desk, then face real crises in date order. Each crisis has one historically
correct option. The player can make **three mistakes**; the **fourth** gets them expelled from the League
Council or ousted from power.

| Desk | Role | IGCSE | A-Level |
| --- | --- | --- | --- |
| League Council | Settle disputes as a member of the League's Council (its "security council") | 12 crises | 17 crises |
| Germany | Advise Bauer, (Wirth), Cuno, Stresemann, (Brüning, Papen) and Hitler | 17 crises | 23 crises |
| Italy | Advise Orlando, (Giolitti) and Mussolini | 16 crises | 19 crises |

**IGCSE** shows three options, offers three adviser hints (each crosses out one wrong answer) and adds an
exam tip after every decision. **A-Level** adds extra crises (the Geneva Protocol, Mosul, Leticia, the Saar,
Wal-Wal, Rapallo, Stresemann's Hundred Days, Kellogg–Briand, the customs union, Lausanne, the Naval
Agreement, Fiume 1920, Tirana and the Four-Power Pact), a harder fourth option, and Historian's Desk notes
(Taylor, Trevor-Roper, Bullock, Steiner, Henig, Marks, MacMillan, Mack Smith, De Felice, Knox, Bosworth and others).

Every decision updates a strategic map built from c.1930 borders: the Ruhr occupation, the Saar, the
Rhineland, Austria, the Sudetenland, Bohemia–Moravia, Memel, Manchuria, Abyssinia and Albania change hands
as they did historically, and flashpoints are marked. The League authority and world tension meters drive the music.

## Playing it

- **Open `index.html`** in any modern browser, or host the folder on any static host (GitHub Pages works).
- **`dist/shadows-over-geneva.html`** is the whole game in one file. You can email it, upload it to Google
  Classroom or Teams, or open it straight from a USB stick.
- It works on phones (portrait and landscape), tablets, Chromebooks and desktops. Map: drag to pan, pinch or
  scroll to zoom, tap markers for labels.
- Music and sound are generated live with the Web Audio API and start when the player taps **Open the file**.
  There is a music toggle on the title screen and in the game.
- Progress saves automatically on the device, so a game can be resumed next lesson.
- **Full screen:** tap ⛶ on the title screen or in the game bar, or press `F`. On iPhone, where browsers don't allow
  full screen, use Share → Add to Home Screen. When the folder is hosted, the included web-app manifest opens it full screen.
- Keyboard: `A`–`D` choose an option, `Enter` seals the decision, `F` toggles full screen.

## Editing the content

All the history lives in `js/data-league.js`, `js/data-germany.js` and `js/data-italy.js`. Each scenario has:

- `lv` (`'both'` or `'a'` for A-Level only) and `date`, which sets the order of play
- `ldr`, the leader being advised; `speaker`, the portrait shown; and `said`, the speech bubble (`saidReal: true` marks a genuine quotation)
- `brief`, `ask`, and the options `opts` (`a: true` marks an A-Level-only distractor; `x` explains why it didn't happen)
- `ans`, the index of the correct option, plus `out`, `head`, `exam` and `hist`
- `fx`: changes to the meters (`auth`, `tens`), territory (`own`) and map markers (`mark`)
- `focus`: `[lon, lat, zoom]` for the map camera

Portraits are graphic-novel style illustrations generated from parameters in `js/portraits.js` (head shape, hair, facial hair, eyewear, clothing, expression, age and backdrop). After editing, rebuild the single-file version:

```sh
cd tools && node bundle.mjs
```

`tools/make-map.mjs` regenerates `js/mapdata.js` (it needs `npm install` in `tools/` and downloads the source GeoJSON).

## Credits

- Map borders (c.1930) are derived from [historical-basemaps](https://github.com/aourednik/historical-basemaps)
  by A. Ourednik, licensed **GPL-3.0**. `js/mapdata.js` is a derived work under the same licence.
- Fonts: Limelight, Special Elite, Courier Prime, Oswald and Comic Neue, loaded from Google Fonts. The game falls back to system fonts offline.
- Speech bubbles are written in character unless marked "Genuine quotation" or "Attributed quotation".

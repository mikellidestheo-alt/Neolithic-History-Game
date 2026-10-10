# Children of Choirokoitia

An educational 3D game set in the Aceramic (pre-pottery) Neolithic village of **Choirokoitia (Khirokitia)** in Cyprus, about 9,000 years ago.

You choose to play a girl or a boy and help your family through one day. Each chore is based on what archaeologists have found at the site. Finishing a chore adds a "Did you know?" fact to your journal.

## Village quiz

The **Village quiz** button on the start screen (and in the journal and at the end of the day) opens a 15-question multiple-choice quiz with one question for every journal fact. Questions are picked at random from a bank of 22 and shuffled, so each attempt is different. After each answer the player sees a short explanation. At the end, any facts they got wrong are listed so they can read them again.

## Play

Open `index.html` in a modern browser. It loads Three.js from a CDN, so you need an internet connection. No build step is needed. It also works when hosted on GitHub Pages.

| Action | Keyboard / mouse | Touch |
| --- | --- | --- |
| Move | WASD / arrow keys, Shift to run | Left joystick, Run button |
| Look | Drag the mouse, scroll to zoom | Drag the screen |
| Talk / act | E or Space | Act button |
| Journal | J | Journal button |
| Sound settings / mute | Sound button, M to mute | Sound button |
| Full screen | Full screen button, F | Full screen button |

## Phones and tablets

The layout adapts to phones (portrait and landscape) and tablets:
- Touch screens get larger buttons and text, icon-only HUD buttons, and space around the camera notch.
- Tap the quest panel to collapse it and see more of the village. It opens again when a new chore starts.
- When an action is available you can tap the prompt itself (for example "Talk to Mother"), as well as the Act button.
- The joystick and buttons hide while dialogue or a card is open, so text is never covered.
- The full-screen button turns phones sideways where the browser allows it. iPhone Safari has no full-screen mode for web pages, so the title screen suggests "Add to Home Screen" instead.

## Sound

All audio is generated live in the browser with the Web Audio API, so there are no sound files to download.

- **Music:** a calm, never-repeating tune on a reed-flute voice over a low drone, with a soft frame drum and lyre plucks. It slows down and drops lower as evening falls.
- **Ambience:** wind, the Maroni river (louder as you get closer), the crackling hearth, birdsong by day and crickets at dusk.
- **Effects:** footsteps (rustling in the wheat), branches, sheaves, fruit, clay, water bubbles, the grinding stone, goat bleats, plaster smears, dialogue blips, a ringing stone chime for each new fact, and quiz feedback.

Sound starts when you press **Begin the day**, because browsers only allow audio after a click. Volume settings are remembered between visits.

## The chores and the history behind them

| # | Chore | What it teaches |
| --- | --- | --- |
| 1 | Fetch water from the Maroni river | No pottery yet: andesite stone bowls, skins and baskets |
| 2 | Gather firewood | Hearths in the round houses |
| 3 | Harvest with a chert sickle | Einkorn and emmer wheat, barley, lentils; sickle gloss |
| 4 | Grind grain on a saddle quern | Grinding stones found in the houses |
| 5 | Bring back runaway goats | Sheep, goats and pigs brought to Cyprus by boat; cattle absent |
| 6 | Pick figs, olives and pistachios | Gathering wild foods alongside farming |
| 7 | Trade a stone bowl for obsidian | Obsidian from Anatolia proves sea trade; picrolite jewellery |
| 8 | Re-plaster the house wall | Round houses of stone and mudbrick, flat roofs, courtyards |
| 9 | Bring a deer bone for a needle | Fallow deer hunting, bone tools |
| 10 | Hear the Elder's story | The village wall with its stairway entrance; burials under house floors |
| 11 | Supper by the fire | How the site was discovered (1934, P. Dikaios; A. Le Brun) and UNESCO listing (1998) |

Optional villagers (flint-knapper, basket-weaver, a traveller, a friend) share bonus facts.

### Creative licence

These parts are invented to make the game work. They fit the period, but there's no direct evidence for them:
- Characters' personalities and dialogue, and the traveller arriving by dugout canoe up the river.
- The village layout is simplified. The house positions, the courtyard hearth and the goat pen are not a plan of the real site.
- The single day squeezes many seasonal tasks together (harvest, fruit picking, hunting).

## Sources

- Cyprus Department of Antiquities, Choirokoitia site page
- UNESCO World Heritage Centre, *Choirokoitia* (site 848)
- A. Le Brun's excavation reports, summarised in general references

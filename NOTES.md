# little Fellas

[Brainstorming doc](https://docs.google.com/document/d/19n-ml0TKguYE0PrPC5kYycIr7pbs8SALPjUFkuNVtsw/edit)

[Newgrounds project](https://www.newgrounds.com/projects/games/1920192/preview)

---

### Tasks prioritized
I should do this in order

- [x] What's the max resolution I'm designing for?
  - I can't reasonably test above 2532 x 1020, so that's fine for this project
  - NG window on desktop will be 960 x 540, if the others want to change that later then it will be easy to

- [x] Test how many animated sprites can exist on screen
- [x] Test how many sprites of various animations, bigger animations, each with movement code

- [x] Test ideal size of sprites
- [x] can the tank be the same size across different resolutions?
  - I can zoom, just make sure tank aspect ratio works on mobile & desktop

- [x] refactor Level.js, separate chunks into functions

- [x] Set consistent tank size, NG window resolution, zoom levels
- [x] temp tank BG

- [x] impact effect animation
- [x] fix heart destory

- [x] horny timer

- [x] change size of cloud
- [x] character flip

- [ ] fellas can be in a forever slide state. seems to happen when theres a lot on screen

- [ ] investigate memory leaks. It seems like destroy() doesn't remove the reference, so no garbage collection

- [x] hover over UI feedback

- [x] process bg as smaller image

- [x] food sprites

- [x] Set up Newgrounds.io

- [x] only landscape orientation - add flip screen in case it's in portrait
- [x] temp orientation prompt

### Non essential / post jam update
- [ ] uhh can I call NGio.js functions the way it's set up?

- [ ] Impliment Psychogoldfish's audio hack for safari

### Notes
- camera zoom messes with objects that should stay in place with a scroll factor of 0. I may have to render that stuff in a parallel scene

### Crash log
when breeding smarto
Cannot read properties of null (reading 'getData')
Level.js 899

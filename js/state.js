// Owner: Core loop (see README)
// The ONLY shared state. Everyone reads it; change it only through the functions below.
const game = {
  loop: 1,
  timeLeft: 60,
  items: [],     // resets every loop
  flags: {},     // resets every loop: e.g. { paintingClicks: 2, cabinetOpen: true }
  clues: [],     // KEPT across loops: e.g. ["BLUE - 4"]
};

// TODO: startLoop(), resetLoop(), addItem(id), hasItem(id), addClue(text)

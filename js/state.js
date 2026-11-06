// Owner: Core loop (see README)
// The ONLY shared state. Everyone reads it; change it only through the functions below.
const game = {
  loop: 1,
  timeLeft: 60,
  items: [],     // resets every loop
  flags: {},     // resets every loop: e.g. { paintingClicks: 2, cabinetOpen: true }
  clues: [],     // KEPT across loops: e.g. ["BLUE - 4"]
  message: "",   // resets every loop: last thing an object "said"
  won: false,
};

// TODO: startLoop(), resetLoop(), addItem(id), hasItem(id), addClue(text), setFlag(name, value), say(text)
// Every one of these must call render() after changing game. See AGENTS.md "Shared contract".

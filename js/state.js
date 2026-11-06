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

function startLoop() {
  const loop = game.loop;
  game.timeLeft = 60;
  const timer = setInterval(() => {
    if (game.won || game.loop !== loop) return clearInterval(timer);  // no global handle: a finished loop's timer stops itself
    game.timeLeft--;
    if (game.timeLeft <= 0) resetLoop();
    else render();
  }, 1000);
  render();
}

function resetLoop() {
  game.items = [];
  game.flags = {};
  game.message = "";
  game.won = false;
  game.loop++;  // never touch game.clues here
  startLoop();
}

function addItem(id) {
  game.items.push(id);
  render();
}

function hasItem(id) {
  return game.items.includes(id);
}

function addClue(text) {
  if (!game.clues.includes(text)) game.clues.push(text);
  render();
}

function setFlag(name, value) {
  game.flags[name] = value;
  render();
}

function say(text) {
  game.message = text;
  render();
}

// Owner: Puzzles (see README)
function onObjectClick(id) {
  const year = "1987";  // the computer password, shown on the photo
  switch (id) {
    case "note":
      addClue("BLUE - 4");
      say('A scribbled note: "BLUE - 4".');
      break;
    case "painting": {
      const clicks = (game.flags.paintingClicks || 0) + 1;
      setFlag("paintingClicks", clicks);
      if (clicks === 4) {
        setFlag("paintingMoved", true);
        addItem("key");
        say("The painting swings aside and a key falls out!");
      } else if (clicks < 4) {
        say("The painting shifts a little.");
      }
      break;
    }
    case "cabinet":
      if (hasItem("key")) {
        setFlag("cabinetOpen", true);
        addClue("Find the year on the photograph");
        say('The key fits. Inside, a card reads: "Find the year on the photograph".');
      } else {
        say("It's locked.");
      }
      break;
    case "photo":
      addClue("The photograph is dated " + year);
      say("The photograph is dated " + year + ".");
      break;
    case "computer":
      if (prompt("Password:") === year) {
        setFlag("doorUnlocked", true);
        say("Access granted. Something clicks in the exit door.");
      } else {
        say("Access denied.");
      }
      break;
    case "door":
      if (game.flags.doorUnlocked) {
        game.won = true;
        render();
      } else {
        say("The door won't budge.");
      }
      break;
    default:
      say("Nothing useful here, and the seconds keep slipping away.");
  }
}

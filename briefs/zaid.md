# Agent brief: Zaid (QA and integration)

> The agent loads this automatically when you say "Zaid" (see `AGENTS.md`).

You're the QA and integration lead for the **front end**. Your job is to make sure Abdullah's half (room and UI) and Baasanjav's half (mechanics) work together and the game is actually playable. The backend is yigitcemakbas's separate work and out of scope.

## You own
- `test.html`: the contract and escape-sequence smoke test
- `.github/workflows/qa.yml`: CI that runs `test.html` in headless Chrome
- `AGENTS.md`, `README.md`, `briefs/`: the shared contract and the team's instructions

Don't write feature code in other people's files. When something is broken in their code, report it on their PR or issue with exact steps to reproduce, which file it's in, and a suggested fix. Fix it yourself only if the human explicitly says to.

## Every session
1. `git switch main && git pull`, then `gh pr list` and `gh run list --limit 5`.
2. For each open PR:
   - Check out the branch (`gh pr checkout N`).
   - Check it only touches its owner's files (`gh pr diff N --name-only`).
   - Run `test.html` and make sure every test for that owner's half passes.
   - Read the diff against the contract in `AGENTS.md`: names, flags, ids, and that clues are never cleared on reset.
   - Play `index.html` by hand: the full escape, a timeout reset mid-puzzle, wrong passwords, clicking things out of order.
   - Post one review with `gh pr review N --comment` or `--request-changes`. Approve only when it's clean.
3. Once both halves are on `main`, CI must be green. Treat a red `main` as the top priority.
4. When a new rule or edge case comes up, add a test to `test.html` and update the contract in `AGENTS.md`.

## Running the test headless locally
There's no Chrome on Zaid's machine, so take a screenshot with Firefox and look at it:
```bash
firefox --headless --screenshot /tmp/qa.png --window-size=800,700 "file://$PWD/test.html"
```

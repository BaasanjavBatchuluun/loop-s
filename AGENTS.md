# Instructions for AI coding agents

These rules apply to every agent working in this repo (Claude Code, Codex, Copilot, Cursor, and others). Read `README.md` first for how the game works.

## Stay in your lane

Four people (and their agents) work here at the same time, each in their own files. Only edit the files that belong to the issue you're working on:

| Area | Files | Issue |
|---|---|---|
| Core loop | `js/state.js`, `js/main.js` | #1 |
| Room & objects | `js/room.js`, `assets/` | #2 |
| Puzzles | `js/puzzles.js` | #3 |
| UI | `js/ui.js`, `style.css` | #4 |

If the task seems to need a change in someone else's file, don't make it. Stop and tell the human, or write what's needed as a comment on the matching issue.

## Shared contract (do not break)

- `game` in `js/state.js` is the only shared state. Don't create other global state.
- `items` and `flags` reset every loop. `clues` persist across loops. That rule is the whole game, so never clear `clues` on reset.
- Room → `onObjectClick(id)` → puzzles → state functions (`addItem`, `addClue`, …) → `render()`.
- Don't rename or remove anything in `game` or these functions without an agreement on the issue first.

## Tech rules

- Use plain HTML/CSS/JS with classic `<script>` tags. `index.html` must keep working when opened directly from disk (`file://`).
- Don't use ES modules, npm, bundlers, frameworks, or build steps.
- Don't add dependencies.

## Git

- Work on a branch per issue (for example `git switch -c issue-3-puzzles`). Never push to `main`.
- Open a pull request that says `Closes #N`, and keep it limited to that issue's files.
- Before finishing, open `index.html` in a browser and check that the console has no errors.

# Bubble Chase 🫧

A colourful, responsive canvas playground: bubbles flee the pointer, bounce off the walls, and burst when caught.

[Play the live game](https://sagarkhatriii.github.io/bubble-chase/)

## Play

Move the mouse to scatter bubbles; click to catch them. On touch screens, drag to scatter and tap to catch. Focus the canvas and use arrow keys plus Space for keyboard play.

- Free play and 30-second challenges
- Adjustable bubble density, pause/resume, shuffle
- Local personal-best score
- Responsive high-DPI canvas and time-based physics
- Reduced-motion users start paused; hidden tabs suspend simulation

## Run locally

Serve this folder with `python -m http.server 8000`, then open http://localhost:8000.

## Test

Run `node test.cjs`. Tests check repulsion, zero-distance stability, wall reflection, speed limits, and prolonged boundary handling.

## Design

Plain HTML, JavaScript and Canvas. `physics.js` contains the independent motion rules; `app.js` handles drawing, pointer/touch/keyboard input and game state. Best scores stay in browser storage. No accounts or backend are required.

Created for Sagar KC's programming portfolio.

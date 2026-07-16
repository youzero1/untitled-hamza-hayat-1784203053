---
status: implemented
title: Tic Tac Toe Game
---

1. Create /app/src/styles/global.css — import Tailwind CSS v4 at the top with `@import "tailwindcss";`. No other content needed.

2. Create /app/src/main.tsx — set up the React 19 root render, import global.css, and render the App component.

3. Create /app/src/types/game.ts — define shared TypeScript types:
   - `Player` type: "X" | "O"
   - `Cell` type: Player | null
   - `Board` type: array of 9 Cells
   - `GameStatus` type: "playing" | "won" | "draw"

4. Create /app/src/lib/gameLogic.ts — pure utility functions:
   - `checkWinner(board: Board): Player | null` — checks all 8 winning lines (rows, columns, diagonals) and returns the winning player or null.
   - `checkDraw(board: Board): boolean` — returns true if all cells are filled and there is no winner.
   - `getGameStatus(board: Board): { status: GameStatus; winner: Player | null; winningLine: number[] | null }` — returns the current game state and which cell indices form the winning line.

5. Create /app/src/hooks/useGame.ts — custom hook managing all game state:
   - State: board (9 nulls), currentPlayer (starts as "X"), gameStatus, winner, winningLine.
   - `handleCellClick(index: number)` — ignores clicks on filled cells or when game is over; updates the board, then checks for winner or draw.
   - `resetGame()` — resets everything back to the initial state.
   - Returns board, currentPlayer, gameStatus, winner, winningLine, handleCellClick, resetGame.

6. Create /app/src/components/Cell.tsx — a single board square:
   - Props: value (Cell), onClick, isWinning (boolean), disabled (boolean).
   - Renders a square button. "X" appears in blue, "O" appears in red.
   - Winning cells get a highlighted background (e.g. yellow/amber).
   - Hover effect on empty, non-disabled cells.
   - Large, bold text centered in the cell.

7. Create /app/src/components/Board.tsx — the 3×3 grid:
   - Props: board, winningLine, onCellClick.
   - Renders a 3×3 CSS grid of Cell components.
   - Passes isWinning=true to cells whose index is in winningLine.

8. Create /app/src/components/StatusBar.tsx — displays game status message:
   - Props: gameStatus, winner, currentPlayer.
   - Shows "Player X's turn" / "Player O's turn" during play.
   - Shows "Player X wins! 🎉" or "Player O wins! 🎉" on win.
   - Shows "It's a draw! 🤝" on draw.
   - Styled prominently above the board.

9. Create /app/src/pages/GamePage.tsx — the main game page:
   - Uses the useGame hook.
   - Composes StatusBar, Board, and a "New Game" reset button.
   - Centered layout, visually polished with a card/panel container.
   - Title "Tic Tac Toe" at the top.

10. Create /app/src/App.tsx — renders GamePage. No routing needed.

11. Create /app/index.html — standard Vite HTML entry point referencing /src/main.tsx.

12. Create /app/vite.config.ts — configure Vite with the React plugin and @tailwindcss/vite plugin, and set up the `@/` path alias pointing to /app/src/.

13. Create /app/package.json — include dependencies: react, react-dom; devDependencies: vite, @vitejs/plugin-react, typescript, @tailwindcss/vite, tailwindcss.

14. Create /app/tsconfig.json — TypeScript config with strict mode, JSX set to react-jsx, and path alias `@/*` mapped to `./src/*`.

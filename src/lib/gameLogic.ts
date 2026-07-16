import type { Board, Player, GameStatus } from '@/types/game';

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(board: Board): { winner: Player | null; winningLine: number[] | null } {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a] as Player, winningLine: line };
    }
  }
  return { winner: null, winningLine: null };
}

export function checkDraw(board: Board): boolean {
  return board.every((cell) => cell !== null);
}

export function getGameStatus(board: Board): {
  status: GameStatus;
  winner: Player | null;
  winningLine: number[] | null;
} {
  const { winner, winningLine } = checkWinner(board);
  if (winner) return { status: 'won', winner, winningLine };
  if (checkDraw(board)) return { status: 'draw', winner: null, winningLine: null };
  return { status: 'playing', winner: null, winningLine: null };
}

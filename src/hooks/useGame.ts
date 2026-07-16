import { useState } from 'react';
import type { Board, Player, GameStatus } from '@/types/game';
import { getGameStatus } from '@/lib/gameLogic';

const initialBoard: Board = Array(9).fill(null);

export function useGame() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [winner, setWinner] = useState<Player | null>(null);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  function handleCellClick(index: number) {
    if (board[index] !== null || gameStatus !== 'playing') return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    const result = getGameStatus(newBoard);
    setBoard(newBoard);
    setGameStatus(result.status);
    setWinner(result.winner);
    setWinningLine(result.winningLine);

    if (result.status === 'playing') {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameStatus('playing');
    setWinner(null);
    setWinningLine(null);
  }

  return { board, currentPlayer, gameStatus, winner, winningLine, handleCellClick, resetGame };
}

import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import StatusBar from '@/components/StatusBar';

export default function GamePage() {
  const { board, currentPlayer, gameStatus, winner, winningLine, handleCellClick, resetGame } =
    useGame();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-black text-white tracking-tight">
            Tic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
              Tac
            </span>{' '}
            Toe
          </h1>
        </div>

        {/* Card */}
        <div className="bg-slate-800 rounded-3xl p-6 shadow-2xl shadow-black/40 border border-slate-700/50 flex flex-col gap-6">
          {/* Status */}
          <StatusBar gameStatus={gameStatus} winner={winner} currentPlayer={currentPlayer} />

          {/* Board */}
          <Board
            board={board}
            winningLine={winningLine}
            onCellClick={handleCellClick}
            disabled={gameStatus !== 'playing'}
          />

          {/* New Game Button */}
          <button
            onClick={resetGame}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
          >
            New Game
          </button>
        </div>

        {/* Player Legend */}
        <div className="flex justify-center gap-8 mt-5 text-sm text-slate-500">
          <span>
            <span className="text-blue-400 font-bold">X</span> — Player 1
          </span>
          <span>
            <span className="text-red-400 font-bold">O</span> — Player 2
          </span>
        </div>
      </div>
    </div>
  );
}

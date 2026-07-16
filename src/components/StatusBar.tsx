import type { GameStatus, Player } from '@/types/game';

interface StatusBarProps {
  gameStatus: GameStatus;
  winner: Player | null;
  currentPlayer: Player;
}

export default function StatusBar({ gameStatus, winner, currentPlayer }: StatusBarProps) {
  const playerColor = (p: Player) =>
    p === 'X' ? 'text-blue-400' : 'text-red-400';

  if (gameStatus === 'won' && winner) {
    return (
      <div className="text-center py-3 px-6 rounded-2xl bg-amber-400/20 border border-amber-400/40">
        <span className={`text-2xl font-bold ${playerColor(winner)}`}>Player {winner}</span>
        <span className="text-2xl font-bold text-white"> wins! 🎉</span>
      </div>
    );
  }

  if (gameStatus === 'draw') {
    return (
      <div className="text-center py-3 px-6 rounded-2xl bg-slate-600/40 border border-slate-500/40">
        <span className="text-2xl font-bold text-slate-200">It's a draw! 🤝</span>
      </div>
    );
  }

  return (
    <div className="text-center py-3 px-6 rounded-2xl bg-slate-700/50 border border-slate-600/40">
      <span className="text-lg text-slate-400">Player </span>
      <span className={`text-2xl font-bold ${playerColor(currentPlayer)}`}>{currentPlayer}</span>
      <span className="text-lg text-slate-400">'s turn</span>
    </div>
  );
}

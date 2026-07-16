import type { Cell as CellType } from '@/types/game';

interface CellProps {
  value: CellType;
  onClick: () => void;
  isWinning: boolean;
  disabled: boolean;
}

export default function Cell({ value, onClick, isWinning, disabled }: CellProps) {
  const baseClasses =
    'w-full aspect-square flex items-center justify-center rounded-2xl text-5xl font-black transition-all duration-200 cursor-pointer border-2 select-none';

  const stateClasses = isWinning
    ? 'bg-amber-400 border-amber-300 shadow-lg shadow-amber-400/40 scale-105'
    : value === null && !disabled
    ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 hover:scale-105'
    : 'bg-slate-700 border-slate-600 cursor-default';

  const textClasses =
    value === 'X'
      ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.7)]'
      : value === 'O'
      ? 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.7)]'
      : '';

  return (
    <button
      className={`${baseClasses} ${stateClasses}`}
      onClick={onClick}
      disabled={disabled || value !== null}
      aria-label={value ?? 'empty cell'}
    >
      <span className={textClasses}>{value}</span>
    </button>
  );
}

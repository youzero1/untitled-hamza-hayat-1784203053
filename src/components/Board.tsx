import type { Board as BoardType } from '@/types/game';
import Cell from '@/components/Cell';

interface BoardProps {
  board: BoardType;
  winningLine: number[] | null;
  onCellClick: (index: number) => void;
  disabled: boolean;
}

export default function Board({ board, winningLine, onCellClick, disabled }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-xs mx-auto">
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onClick={() => onCellClick(index)}
          isWinning={winningLine?.includes(index) ?? false}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

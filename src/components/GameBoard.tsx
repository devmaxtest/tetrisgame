import React from 'react';
import { Grid } from '../game/types';

interface GameBoardProps {
  grid: Grid;
}

const GameBoard: React.FC<GameBoardProps> = ({ grid }) => {
  return (
    <div
      className="game-board"
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${grid.length}, 1fr)`,
        gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
        border: '2px solid #ffffff',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            style={{
              backgroundColor: cell ? '#03a9f4' : 'transparent',
              border: cell ? '1px solid #0288d1' : '1px solid #424242',
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
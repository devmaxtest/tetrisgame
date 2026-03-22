import React, { useState, useEffect } from 'react';
import './ScorePanel.css';

type CellContent = string | null;
interface GameBoardProps {
  width: number;
  height: number;
}

const GameBoard: React.FC<GameBoardProps> = ({ width, height }) => {
  const [grid, setGrid] = useState<CellContent[][]>([]);

  useEffect(() => {
    // Initialize the grid
    const newGrid: CellContent[][] = [];
    for (let i = 0; i < height; i++) {
      newGrid.push(new Array(width).fill(null));
    }
    setGrid(newGrid);
  }, [width, height]);

  return (
    <div className="game-board">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`grid-cell ${cell ? 'filled' : ''}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
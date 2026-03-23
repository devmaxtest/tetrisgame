import React, { useState, useEffect, useCallback } from 'react';
import './ScorePanel.css';

type CellContent = string | null;
interface GameBoardProps {
  width: number;
  height: number;
}

const initialGrid = (width: number, height: number): CellContent[][] => {
  const grid: CellContent[][] = [];
  for (let i = 0; i < height; i++) {
    grid.push(new Array(width).fill(null));
  }
  return grid;
};

const GameBoard: React.FC<GameBoardProps> = ({ width, height }) => {
  const [grid, setGrid] = useState<CellContent[][]>(initialGrid(width, height));
  const [currentPiece, setCurrentPiece] = useState<{
    shape: CellContent[][];
    position: { x: number; y: number };
  }>({
    shape: [["T", "T"], ["T", null]],
    position: { x: Math.floor(width / 2) - 1, y: 0 },
  });

  const movePiece = useCallback(
    (direction: "left" | "right" | "down") => {
      setCurrentPiece((prevPiece) => {
        const { x, y } = prevPiece.position;
        let newPosition = { x, y };

        if (direction === "left") newPosition.x -= 1;
        if (direction === "right") newPosition.x += 1;
        if (direction === "down") newPosition.y += 1;

        // Vérifier collision avant de mettre à jour la position
        if (!checkCollision(grid, { shape: prevPiece.shape, position: newPosition })) {
          return { ...prevPiece, position: newPosition };
        }
        return prevPiece; // Pas de changement si collision
      });
    },
    [grid]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") movePiece("left");
      if (event.key === "ArrowRight") movePiece("right");
      if (event.key === "ArrowDown") movePiece("down");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [movePiece]);

  const renderGrid = () => {
    const renderedGrid = initialGrid(width, height);
    const { shape, position } = currentPiece;

    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const gridRow = row + position.y;
          const gridCol = col + position.x;
          
          if (gridRow >= 0 && gridRow < height && gridCol >= 0 && gridCol < width) {
            renderedGrid[gridRow][gridCol] = shape[row][col];
          }
        }
      }
    }
    return renderedGrid;
  };

  useEffect(() => {
    setGrid(renderGrid());
  }, [currentPiece]);

  const checkCollision = (grid: CellContent[][], piece: { shape: CellContent[][]; position: { x: number; y: number } }) => {
    const { shape, position } = piece;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const gridRow = row + position.y;
          const gridCol = col + position.x;

          if (
            gridRow >= height ||
            gridCol < 0 ||
            gridCol >= width ||
            (grid[gridRow] && grid[gridRow][gridCol] !== null)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  return (
    <div className="game-board">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`grid-cell ${cell ? 'filled' : ''}`}>{cell}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
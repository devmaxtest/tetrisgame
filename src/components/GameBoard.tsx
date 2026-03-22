// Fichier GameBoard.tsx
import React, { useEffect, useState } from 'react';

const GameBoard = () => {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 20 }, () => Array(10).fill(""))
  );

  useEffect(() => {
    // Exemple d'animation : ajout de pièces de test
    const interval = setInterval(() => {
      const newBoard = [...board];
      newBoard[0][Math.floor(Math.random() * 10)] = "X"; // Ex : Ajouter "X"
      setBoard(newBoard);
    }, 1000);

    return () => clearInterval(interval);
  }, [board]);

  return (
    <div id="tetris-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="tetris-row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className={`tetris-cell ${cell}`}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
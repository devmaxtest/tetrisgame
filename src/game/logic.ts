import { Grid, Tetromino, TetrominoType } from './types';

// Tetromino shapes
const tetrominoShapes: Record<TetrominoType, Grid> = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]
};

// Generate new tetromino
export const generateTetromino = (type: TetrominoType): Tetromino => ({
  type,
  shape: tetrominoShapes[type]
});

// Create empty grid
export const createGrid = (rows: number, cols: number): Grid => {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
};

// Check for collision
export const checkCollision = (
  grid: Grid,
  piece: Tetromino,
  x: number,
  y: number
): boolean => {
  for (let row = 0; row < piece.shape.length; row++) {
    for (let col = 0; col < piece.shape[row].length; col++) {
      if (piece.shape[row][col]) {
        const newX = x + col;
        const newY = y + row;
        if (
          newX < 0 ||
          newX >= grid[0].length ||
          newY < 0 ||
          newY >= grid.length ||
          grid[newY][newX]
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

// Clear completed rows
export const clearCompletedRows = (grid: Grid): { grid: Grid; rowsCleared: number } => {
  const updatedGrid = grid.filter(row => row.some(cell => cell === 0));
  const rowsCleared = grid.length - updatedGrid.length;
  while (updatedGrid.length < grid.length) {
    updatedGrid.unshift(Array(grid[0].length).fill(0));
  }
  return { grid: updatedGrid, rowsCleared };
};
export type Grid = number[][];

export type TetrominoType = 'I' | 'O' | 'T' | 'J' | 'L' | 'S' | 'Z';

export interface Tetromino {
  type: TetrominoType;
  shape: Grid;
}

export interface GameState {
  grid: Grid;
  currentPiece: Tetromino;
  nextPiece: Tetromino;
  score: number;
  level: number;
  linesCleared: number;
  state: 'playing' | 'paused' | 'gameOver';
}
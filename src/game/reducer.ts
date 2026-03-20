import { GameState, Grid, Tetromino } from './types';
import { createGrid, generateTetromino, checkCollision, clearCompletedRows } from './logic';

type GameAction =
  | { type: 'START' }
  | { type: 'PAUSE' }
  | { type: 'RESET' }
  | { type: 'TICK' }
  | { type: 'MOVE'; direction: 'left' | 'right' }
  | { type: 'ROTATE' };

const GRID_ROWS = 20;
const GRID_COLS = 10;

const initialState: GameState = {
  grid: createGrid(GRID_ROWS, GRID_COLS),
  currentPiece: generateTetromino('I'),
  nextPiece: generateTetromino('O'),
  score: 0,
  level: 1,
  linesCleared: 0,
  state: 'paused',
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'START':
      return { ...state, state: 'playing' };
    case 'PAUSE':
      return { ...state, state: 'paused' };
    case 'RESET':
      return initialState;
    case 'TICK': {
      const { grid, currentPiece } = state;
      const newY = currentPiece.shape.length + 1; // Simulating downward movement
      if (checkCollision(grid, currentPiece, 0, newY)) {
        const {grid: updatedGrid, rowsCleared} = clearComplete;}
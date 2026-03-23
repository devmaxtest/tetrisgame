// Fichier App.tsx
import React from "react";
import GameBoard from "./components/GameBoard";
import ScorePanel from "./components/ScorePanel";
import ControlsHint from "./components/ControlsHint";
import "./styles/index.css";

const App = () => (
  <div className="tetris-container">
    <header className="game-header">
      <h1>Tetris Game</h1>
    </header>
    <main className="game-main">
      <GameBoard />
      <ScorePanel />
      <ControlsHint />
    </main>
    <footer className="game-footer">
      <p>&copy; 2026 TetrisGame, Inc.</p>
    </footer>
  </div>
);

export default App;

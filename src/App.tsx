// Fichier App.tsx pour Tetrisgame
import React from 'react';
import GameBoard from './components/GameBoard';
import ScorePanel from './components/ScorePanel';

function App() {
  return (
    <div className='app-container'>
      <ScorePanel />
      <h1>Bienvenue sur TetrisGame</h1>
      <GameBoard />
    </div>
  );
}

export default App;
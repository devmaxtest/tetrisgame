import React from 'react';
import './ScorePanel.css'; // Ajouter un CSS global pour gérer les animations propres et les styles avancés.

interface ScorePanelProps {
  score: number;
  level: number;
  linesCleared: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ score, level, linesCleared }) => {
  return (
    <div className="score-panel">
      <h2 className="score">Score: {score}</h2>
      <h3 className="level">Level: <span>{level}</span></h3>
      <h3 className="lines">Lines Cleared: {linesCleared}</h3>
    </div>
  );
};

export default ScorePanel;
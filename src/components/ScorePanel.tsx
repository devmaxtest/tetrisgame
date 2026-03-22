import React from 'react';
import './ScorePanel.css';

interface ScorePanelProps {
  score: number;
  level: number;
  linesCleared: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ score, level, linesCleared }) => {
  return (
    <div className="score-panel">
      <h2>Game Info</h2>
      <div className="info-row">
        <span>Score:</span>
        <span>{score}</span>
      </div>
      <div className="info-row">
        <span>Level:</span>
        <span>{level}</span>
      </div>
      <div className="info-row">
        <span>Lines Cleared:</span>
        <span>{linesCleared}</span>
      </div>
    </div>
  );
};

export default ScorePanel;
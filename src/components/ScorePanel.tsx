import React from 'react';

interface ScorePanelProps {
  score: number;
  level: number;
  linesCleared: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ score, level, linesCleared }) => {
  return (
    <div className="score-panel" style={{ color: '#fff' }}>
      <h2>Score: {score}</h2>
      <h3>Level: {level}</h3>
      <h3>Lines Cleared: {linesCleared}</h3>
    </div>
  );
};

export default ScorePanel;
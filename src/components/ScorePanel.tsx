import React from 'react';

interface ScorePanelProps {
  score: number;
  level: number;
  linesCleared: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ score, level, linesCleared }) => {
  return (
    <div
      className="score-panel"
      style={{
        color: '#fff',
        textAlign: 'center',
        border: '2px solid #4CAF50',
        background: 'linear-gradient(to right, #4CAF50, #FFC107)',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(76,175,80,0.7)',
        animation: 'pulse 1.5s infinite',
      }}
    >
      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        Score: {score}
      </h2>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Level: <span style={{ color: '#FFC107', fontWeight: 'bold' }}>{level}</span>
      </h3>
      <h3 style={{ fontSize: '1.5rem', color: '#2196F3' }}>
        Lines Cleared: {linesCleared}
      </h3>
    </div>
  );
};

export default ScorePanel;
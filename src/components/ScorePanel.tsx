import React, { useEffect, useState } from 'react';
import './ScorePanel.css';

interface ScorePanelProps {
  score: number;
  level: number;
  linesCleared: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({ score, level, linesCleared }) => {
  const [animatedScore, setAnimatedScore] = useState(score);

  useEffect(() => {
    if (score !== animatedScore) {
      setAnimatedScore(score);
    }
  }, [score, animatedScore]);

  return (
    <div className="score-panel">
      <h2 className="score animated">
        Score: <span className="pulse-effect">{animatedScore}</span>
      </h2>
      <h3 className="level">Level: <span className="pop-level">{level}</span></h3>
      <h3 className="lines">Lines Cleared: <span className="lines-effect">{linesCleared}</span></h3>
    </div>
  );
};

export default ScorePanel;
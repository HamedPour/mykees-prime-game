import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// styled components
import GameOverPageContainer from "../styledComponents/GameOver/GameOverPageContainer";
import RestartButton from "../styledComponents/GameOver/RestartButton";

function GaveOverPage() {
  const [reason, setReason] = useState("Gods of Math said no!");
  const [score, setScore] = useState(0);

  useEffect(() => {
    getScore();
    getGameOverReason();
    return () => {
      localStorage.clear();
    };
  }, []);

  function getGameOverReason() {
    const aReason = localStorage.getItem("gameOverReason");
    setReason(aReason);
  }

  function getScore() {
    const aScore = localStorage.getItem("score");
    setScore(aScore);
  }

  return (
    <GameOverPageContainer>
      <h1>Game Over</h1>
      <p>{reason}</p>
      <p>You got {score} right!</p>
      <RestartButton>
        <NavLink to="/game">Start Again</NavLink>
      </RestartButton>
    </GameOverPageContainer>
  );
}

export default GaveOverPage;

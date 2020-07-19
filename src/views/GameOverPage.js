import React from "react";

// styled components
import GameOverPageContainer from "../styledComponents/GameOver/GameOverPageContainer";
import RestartButton from "../styledComponents/GameOver/RestartButton";

function GaveOverPage() {
  return (
    <GameOverPageContainer>
      <h1>Game Over</h1>
      <p>Reason for losing</p>
      <p>You got 5 right!</p>
      <RestartButton>Start Again</RestartButton>
    </GameOverPageContainer>
  );
}

export default GaveOverPage;

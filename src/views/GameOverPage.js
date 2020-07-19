import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

// styled components
import GameOverPageContainer from "../styledComponents/GameOver/GameOverPageContainer";
import RestartButton from "../styledComponents/GameOver/RestartButton";

function GaveOverPage(props) {
  return (
    <GameOverPageContainer>
      <h1>Game Over</h1>
      <p>"REACT EAT A DICK!"</p>
      <p>You got 5 right!</p>
      <RestartButton>
        <NavLink to="/game">Start Again</NavLink>
      </RestartButton>
    </GameOverPageContainer>
  );
}

export default GaveOverPage;

import React, { useState, useEffect } from "react";

// styled components
import GamePageContainer from "../styledComponents/GamePage/GamePageContainer";
import Question from "../styledComponents/GamePage/Question";
import ButtonContainer from "../styledComponents/GamePage/ButtonContainer";
import YesButton from "../styledComponents/GamePage/YesButton";
import NoButton from "../styledComponents/GamePage/NoButton";

// componenets
import Score from "../components/Score";
import TimerCounter from "../components/TimeCounter";

function GamePage(props) {
  const [currentNumber] = useState(13);
  const [timeLimit] = useState(3);
  const [isTimeUp, setIsTimeUp] = useState(false);

  function timeIsUp() {
    setIsTimeUp(true);
  }

  useEffect(() => {
    if (isTimeUp) {
      //props.history.push("/game-over");
    }
  }, [isTimeUp, props]);

  return (
    <GamePageContainer>
      <Score />
      <TimerCounter timeIsUp={timeIsUp} timeLimit={timeLimit} />
      <Question>
        is <b>{currentNumber}</b> prime?
      </Question>
      <ButtonContainer>
        <YesButton>Yes</YesButton>
        <NoButton>No</NoButton>
      </ButtonContainer>
    </GamePageContainer>
  );
}

export default GamePage;

import React from "react";

// styled components
import GamePageContainer from "../styledComponents/GamePage/GamePageContainer";
import Score from "../styledComponents/GamePage/Score";
import Timer from "../styledComponents/GamePage/Timer";
import Question from "../styledComponents/GamePage/Question";
import ButtonContainer from "../styledComponents/GamePage/ButtonContainer";
import YesButton from "../styledComponents/GamePage/YesButton";
import NoButton from "../styledComponents/GamePage/NoButton";

function GamePage() {
  return (
    <GamePageContainer>
      <Score>Score: 3</Score>
      <Timer>44.4s remaining</Timer>
      <Question>is 37 prime?</Question>
      <ButtonContainer>
        <YesButton>Yes</YesButton>
        <NoButton>No</NoButton>
      </ButtonContainer>
    </GamePageContainer>
  );
}

export default GamePage;

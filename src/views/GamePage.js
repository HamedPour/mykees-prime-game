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

// utils
import randomPrimeGenerator from "../utils/randomPrime";

function GamePage(props) {
  const [timeLimit] = useState(30);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [randomPrime, setRandomPrime] = useState(randomPrimeGenerator());
  const [displayNumber, setDisplayNumber] = useState(0);
  const [isPrime, setIsPrime] = useState(false);
  const [score, setScore] = useState(0);

  function timeIsUp() {
    setIsTimeUp(true);
  }

  function checkYesClick() {
    if (!isPrime) {
      // GameOver
      gameOver(`${randomPrime + 1} is Not prime!`);
    }
    setScore(score + 1);
    localStorage.setItem("score", score);
    setRandomPrime(randomPrimeGenerator());
  }

  function checkNoClick() {
    if (isPrime) {
      // GAME OVER!
      gameOver(`${randomPrime} Is prime!`);
    }
    setScore(score + 1);
    localStorage.setItem("score", score);
    setRandomPrime(randomPrimeGenerator());
  }
  function questionNumberGenerator() {
    let trick = Math.floor(Math.random() * 2);
    if (trick) {
      setDisplayNumber(randomPrime + 1);
      setIsPrime(false);
    } else {
      setDisplayNumber(randomPrime);
      setIsPrime(true);
    }
  }

  function gameOver(aReason) {
    localStorage.setItem("score", score);
    localStorage.setItem("gameOverReason", aReason);
    props.history.push("/game-over");
  }

  useEffect(() => {
    // update display number
    setDisplayNumber(randomPrime);
    if (isTimeUp) {
      gameOver("Time ran out!");
    }
    questionNumberGenerator();
  });

  return (
    <GamePageContainer>
      <Score score={score} />
      <TimerCounter timeIsUp={timeIsUp} timeLimit={timeLimit} />
      <Question>
        is <b>{displayNumber}</b> prime?
      </Question>
      <ButtonContainer>
        <YesButton onClick={checkYesClick}>Yes</YesButton>
        <NoButton onClick={checkNoClick}>No</NoButton>
      </ButtonContainer>
    </GamePageContainer>
  );
}

export default GamePage;

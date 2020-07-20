import React from "react";
import { NavLink } from "react-router-dom";

// styled componenets
import LandingPageContainer from "../styledComponents/LandingPage/LandingPageContainer";
import WelcomeTitle from "../styledComponents/LandingPage/WelcomeTitle";
import StartButton from "../styledComponents/LandingPage/StartButton";
import VerticalSpacer from "../styledComponents/LandingPage/VertinalSpacer";

// mykee style
import "../mykeeText.css";

function LandingPage() {
  return (
    <LandingPageContainer>
      <WelcomeTitle>
        Welcome to
        <div className="neon">
          <span className="text" data-text="Mykee's">
            Mykee's
          </span>
          <span className="gradient"></span>
          <span className="spotlight"></span>
        </div>
        Prime Game
      </WelcomeTitle>
      <VerticalSpacer />
      <StartButton>
        <NavLink to="/mykees-prime-game/game">Start Game</NavLink>
      </StartButton>
    </LandingPageContainer>
  );
}

export default LandingPage;

import React from "react";
import { NavLink } from "react-router-dom";

// styled componenets
import LandingPageContainer from "../styledComponents/LandingPage/LandingPageContainer";
import WelcomeTitle from "../styledComponents/LandingPage/WelcomeTitle";
import StartButton from "../styledComponents/LandingPage/StartButton";
import VerticalSpacer from "../styledComponents/LandingPage/VertinalSpacer";

function LandingPage() {
  return (
    <LandingPageContainer>
      <WelcomeTitle>Welcome to Mykee's Prime Game</WelcomeTitle>
      <VerticalSpacer />
      <StartButton>
        <NavLink to="/game">Start Game</NavLink>
      </StartButton>
    </LandingPageContainer>
  );
}

export default LandingPage;

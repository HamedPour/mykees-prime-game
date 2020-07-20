import React, { useEffect } from "react";

// styled component
import ScoreStyle from "../styledComponents/GamePage/Score";

export default function Score(props) {
  useEffect(() => {}, [props.score]);
  return <ScoreStyle>Score: {props.score}</ScoreStyle>;
}

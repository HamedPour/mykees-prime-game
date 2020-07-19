import React, { useState } from "react";

// styled component
import ScoreStyle from "../styledComponents/GamePage/Score";

export default function Score() {
  const [score] = useState(0);
  return <ScoreStyle>Score: {score}</ScoreStyle>;
}

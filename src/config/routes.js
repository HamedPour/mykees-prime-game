// views
import LandingPage from "../views/LandingPage";
import GamePage from "../views/GamePage";
import GameOverPage from "../views/GameOverPage";
import Page404 from "../views/Page404";

export default [
  {
    path: "/mykees-prime-game",
    name: "LandingPage",
    component: LandingPage,
    exact: true,
  },
  {
    path: "/mykees-prime-game/game",
    name: "GamePage",
    component: GamePage,
    exact: true,
  },
  {
    path: "/mykees-prime-game/game-over",
    name: "GameOverPage",
    component: GameOverPage,
    exact: true,
  },
  {
    path: "*",
    component: Page404,
  },
];

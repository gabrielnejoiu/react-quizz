import { React } from "react";
import ReactDom from "react-dom";
import Quizz from "./components/quizzWrapper";

import "./assets/css/index.css";

const App = () => {
  return <Quizz />;
};

ReactDom.render(<App />, document.getElementById("root"));

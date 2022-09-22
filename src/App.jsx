import { useState } from "react";
import "./App.css";
import JokesData from "../jokesData";
import Jokes from "./components/Jokes";
function App() {
  //console.log(JokesData)

  const [jokes, setJokes] = useState(JokesData);
  const [holdJokes, setHoldJokes] = useState({
    setup: "",
    punchline: "",
  });

  function getMoreJokes() {
    const funnyJokes = jokes;
    const randomNumber = Math.floor(Math.random() * funnyJokes.length);
    const plot = funnyJokes[randomNumber];
    // console.log(plot)
    setHoldJokes(plot);
  }

  return (
    <div className="main">
      <div>
        <Jokes key={holdJokes.setup} {...holdJokes} />
      </div>
      <div>
        <button className="btn--joke" onClick={getMoreJokes}>
          Wants Some pun
        </button>
      </div>
    </div>
  );
}

export default App;
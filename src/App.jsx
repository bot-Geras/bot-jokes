import { useState } from "react";
import "./App.css";
import JokesData from "../jokesData";
import Jokes from "./components/Jokes";
function App() {
  //console.log(JokesData)

  const [jokes, setJokes] = useState(JokesData);
  const [holdJokes, setHoldJokes] = useState({
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  });

  function getMoreJokes() {
    const funnyJokes = jokes;
    const randomNumber = Math.floor(Math.random() * funnyJokes.length);
    const plot = funnyJokes[randomNumber];
    // console.log(plot)
    setHoldJokes(prevState => {
      return {
        ...prevState,
        setup: plot.setup,
        punchline: plot.punchline
      }
    });
  }

  return (
    <div className="main">
      <div>
        <Jokes key={holdJokes.setup} {...holdJokes} />
      </div>
      <div>
        <button className="btn--joke" onClick={getMoreJokes}>
          Squish Me
        </button>
      </div>
    </div>
  );
}

export default App;
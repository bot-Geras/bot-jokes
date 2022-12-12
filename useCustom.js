import { useState, useEffect } from "react";
import JokesData from "./jokesData";

function useCustom() {
  const synth = window.speechSynthesis;
  const [jokes, setJokes] = useState(JokesData);
  const [holdJokes, setHoldJokes] = useState({
    setup: "Let me tell you a joke",
    punchline: "Squish me",
  });
  const [loading, setLoading] = useState(false);

  function getMoreJokes() {
    const funnyJokes = jokes;
    const randomNumber = Math.floor(Math.random() * funnyJokes.length);
    const plot = funnyJokes[randomNumber];
    // console.log(plot, "hi");

    setHoldJokes((prevState) => {
      return {
        ...prevState,
        setup: plot.setup,
        punchline: plot.punchline,
      };
    });

    const setupUtter = new SpeechSynthesisUtterance(plot.setup);
    const punchUtter = new SpeechSynthesisUtterance(plot.punchline);
    synth.speak(setupUtter);
    setTimeout(() => {
      synth.speak(punchUtter);
    }, 3000);
  }

  // console.log(getMoreJokes())

  return { holdJokes, getMoreJokes, loading };
}

export default useCustom;

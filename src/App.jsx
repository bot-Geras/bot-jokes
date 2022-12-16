import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const synth = window.speechSynthesis;
  const [pun, setPun] = useState(null);
  const [language, setLanguage] = useState("en");
  const [errMessage, setErrMessage] = useState(null);

  function handleClick(e) {
    fetch(`https://v2.jokeapi.dev/joke/Any`)
      .then((res) => res.json())
      .then((data) => filterDataType(data));
    setIsLoading(false);
  }
  function filterDataType(joke) {
    if (joke.type === "twopart") {
      setPun(joke.setup);

      const utterSpeech = new SpeechSynthesisUtterance(joke.setup);
      utterSpeech.lang = language;
      synth.speak(utterSpeech);

      setTimeout(() => {
        setPun(joke.delivery);
        const utterPunch = new SpeechSynthesisUtterance(joke.delivery);
        utterPunch.lang = language;
        synth.speak(utterPunch);
      }, 5000);
    }
    if (joke.type === "single") {
      setPun(joke.setup);
      setPun(null);
      const punJoke = new SpeechSynthesisUtterance(joke.setup);
      synth.speak(punJoke);
    }

    if (joke.error === true) {
      let errorMessage = data.message;
      // err code 106 means there is no joke available for this language
      if (joke.code === 106) {
        errorMessage += " - Language not supported. Use another one.";
      }
      setErrMessage(errorMessage);
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", (KeyboardEvent) => {
      if (KeyboardEvent.key.toLowerCase === "j") {
        handleClick();
      }
    });
  }, []);
  return (
    <div className="main">
      <div className="language">
        <span>Language: </span>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">en - English</option>
          <option value="de">de - German</option>
          <option value="cs">cs - Czech</option>
          <option value="es">es - Spanish</option>
          <option value="fr">fr - French</option>
          <option value="pt">pt - Protuguese</option>
        </select>
      </div>
      <div>{pun && <h1>{pun}</h1>}</div>
      <div>{errMessage && <h2>{errMessage}</h2>}</div>

      <div>
        <button className="btn--joke" onClick={handleClick}>
          Squish Me
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Jokes from "./components/Jokes";
import { useEffect, useState } from "react";

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en")

  function handleClick() {
    setIsLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming")
      .then((res) => res.json())
      .then((data) => setAllJokes(data));
      setIsLoading(false)
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
      <div>
        <Jokes key={allJokes.id} {...allJokes} loading={isLoading} />
      </div>
      <div>
        <button className="btn--joke" onClick={handleClick}>
          Squish Me
        </button>
      </div>
    </div>
  );
}

export default App;

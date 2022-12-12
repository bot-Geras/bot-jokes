import {useState, useEffect} from "react"
import JokesData from "./jokesData";

function useCustoms() {
    const [jokes, setJokes] = useState(JokesData);
    const [holdJokes, setHoldJokes] = useState({
      setup: "I got my daughter a fridge for her birthday.",
      punchline: "I can't wait to see her face light up when she opens it.",
    });
  
    function getMoreJokes() {
      const funnyJokes = jokes;
      const randomNumber = Math.floor(Math.random() * funnyJokes.length);
      const plot = funnyJokes[randomNumber];
      
      setHoldJokes(prevState => {
        return {
         
          setup: plot.setup,
          punchline: plot.punchline
        }
      });
    }
    // console.log(getMoreJokes())

    return {holdJokes, getMoreJokes}

}

export default useCustoms
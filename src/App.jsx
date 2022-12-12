import "./App.css";
import Jokes from "./components/Jokes";
import useCustom from "../useCustom";
import { useEffect } from "react";
import { useSpeechSynthesis } from 'react-speech-kit'; 

function App() {
  const { holdJokes, getMoreJokes } = useCustom();
  const {speak} = useSpeechSynthesis()
  // console.log(holdJokes)
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

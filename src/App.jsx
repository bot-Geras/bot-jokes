import "./App.css";
import Jokes from "./components/Jokes";
import useCustom from "../useCustom";

function App() {
  const { holdJokes, getMoreJokes } = useCustom();

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

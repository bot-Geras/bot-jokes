import useCustom from "../../useCustom";
export default function Joke(props) {
 

  return (
    <div className="joke">
      {!loading ? setup : <h1>loading...</h1>}
      {!loading ? punch : <h1>loading...</h1>}
    </div>
  );
}

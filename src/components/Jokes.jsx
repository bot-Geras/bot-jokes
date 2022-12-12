import useCustom from "../../useCustom";
export default function Joke(props) {
  const { loading } = useCustom();
  const setup = <h1>{props.setup}</h1>;
  const punch = <p>{props.punchline}</p>;

  return (
    <div className="joke">
      {!loading ? setup : <h1>loading...</h1>}
      {!loading ? punch : <h1>loading...</h1>}
    </div>
  );
}

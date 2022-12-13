export default function Joke(props) {
    const setup = <h1>{props.setup}</h1>
      const punch = <p>{props.delivery}</p>
  return (
    <div className="joke">
      <h1>{props.setup}</h1>
      <p>{props.delivery}</p>
    </div>
  );
}

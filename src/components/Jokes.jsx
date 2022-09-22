export default function Joke(props) {
    console.log(props)
    return (
        <div className="joke">
            <h1>{props.setup}</h1>
            <p>{props.punchline}</p>
        </div>
    )
}
// Task 2: App should render 5 <Joke /> components
// Joke component that receives a "question" prop and a "punchLine" prop, then renders them
// Extra credit
// 1. If you don't pass in a "question" prop, make it show punchLine only instead
// 2. Style Joke component
import React from "react";

function Joke(props) {
    return (
        <div className="joke">
            <li>{props.question} {props.punchLine}</li>
        </div>
    );
}

export default Joke;
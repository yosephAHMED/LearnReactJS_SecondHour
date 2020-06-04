// Task 2: App should render 5 <Joke /> components
// Joke component that receives a "question" prop and a "punchLine" prop, then renders them
// Extra credit
// 1. If you don't pass in a "question" prop, make it show punchLine only instead
// 2. Style Joke component
import React from "react";
import "./style.css";

function Joke(props) {

    // if props.question exists, then the conditional below will execute
    if(props.question) {
        return (
            <div className="joke">
                <li>{props.question} {props.punchLine}</li>
            </div>
        );
    } else{ // there was no question prop
        return (
            <div className="badJoke">
                <li>{props.punchLine}</li>
            </div>
        );
    }
}

export default Joke;
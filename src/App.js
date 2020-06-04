import React from "react";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
// import jokesData from "./jokesData"

function App() {
  
  // const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question}
  // punchLine={joke.punchLine} />)

  return (
    <>
      {/*{jokeComponents}*/}
      <div className="contacts">
        <h2>Task 1: ContactCard component</h2>
        <ContactCard 
          name="Bob" 
          imgUrl="http://placekitten.com/300/200" 
          phone="(212)555-1234" 
          email="dummy@gmail.com" 
        />

        <ContactCard 
          name="John" 
          imgUrl="http://placekitten.com/400/200" 
          phone="(212)555-2345" 
          email="fluff@gmail.com"
        />
      </div>

      <br></br>

      <div className="joke_list">
        <h2>Task 2: Joke component</h2>

        <Joke 
          question="Did you hear about the mathematician who's afraid of negative numbers?"
          punchLine="He'll stop at nothing to avoid them." 
        />

        <Joke 
          question="Why do we tell actors to 'break a leg'?"
          punchLine="Because every play has a cast"
        />

        <Joke 
          question="Yesterday I saw a guy spill all his Scrabble letters on the road." 
          punchLine="I asked him, 'What's the word on the street?'"
        />

        <Joke 
          question="Hear about the new restaurant called Karma?" 
          punchLine="There's no menu: You get what you deserve." 
        />

        <Joke 
          question="Did you hear about the claustrophobic astronaut?" 
          punchLine="He just needed a little space."
        />

        {/* extra credit */}
        <Joke 
          punchLine="Testing my extra credit. LOL!"
        />
  
      </div>
    </>
  );
}

export default App;

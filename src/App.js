import React from "react";
import ContactCard from "./components/ContactCard"

function App() {
  return (
    <>
      <div className="contacts">
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
        <Joke />
        <Joke />
        <Joke />
        <Joke />
        <Joke />
      </div>
    </>
  );
}

export default App;

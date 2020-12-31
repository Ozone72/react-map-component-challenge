import React from "react";
import Heading from "./Heading";
import emojis from "../../src/emojipedia";
import DictItem from "./DictItem";

function mapDict(emoji){
  return(
    <DictItem 
      key={emoji.id}
      emoji={emoji.emoji}
      term={emoji.name}
      def={emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <Heading />
      <div className="dictionary">
        {emojis.map(mapDict)}
      </div>
    </div>
  );
}

export default App;

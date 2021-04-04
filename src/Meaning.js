import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <li>
                {definition.definition}
                <br />
                <Example example={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

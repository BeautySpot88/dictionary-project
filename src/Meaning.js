import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
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
                <strong>Example:</strong> <em>{definition.example}</em>
                <Synonyms synonyms={definition.synonyms} />
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="keyword">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return (
      <section className="noDefinition">
        <h2>
          No Definitions Found <br />
          <FontAwesomeIcon icon={faFrown} />
        </h2>

        <h5>
          Sorry pal, we couldn't find definitions for the word you were looking
          for.
          <br />
          You can try the search again at later time or head to the web instead.
        </h5>
      </section>
    );
  }
}

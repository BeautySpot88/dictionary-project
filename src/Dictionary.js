import React, { useState } from "react";
import Results from "./Results.js";
import Photos from "./Photos";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
    console.log(response.title);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionResponse)
      .catch(() => setResults(null));

    let pexelApiKey =
      "563492ad6f91700001000001e1218c97a5ea4a21bc59ce4f59879502";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="Instruction">What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="SearchField">
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Search a word ..."
            />
          </form>
          <div className="hints">
            Suggested keywords: extra, bless, duty ...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

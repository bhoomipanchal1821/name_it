import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import React, { useState } from "react";
import ResultContainer from "./components/ResultContainer/ResultContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerText, setHeaderText] = useState("Name It!");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded (!inputText);
    setSuggestedNames( inputText ? name(inputText) : []);
  };

  return (
    <div >
      <Header headerExpanded={headerExpanded} headTitle={headerText} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultContainer suggestedNames={suggestedNames} />
    </div>
  );
};

export default App;

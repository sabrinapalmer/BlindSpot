import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const OptionSet = ({ firstOption, secondOption }) => (
  <div className="optionset">
    <select className="optionselect" value={firstOption}>
      <option value={firstOption}>{firstOption}</option>
    </select>
    <button style={{ width: "50%" }}>{secondOption}</button>
  </div>
);

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Blind SPOT</h1>
        <button
          className="settings-button"
          onClick={() => {
            /* TODO handle settings click */
          }}
        >
          <FontAwesomeIcon icon={faCog} size="xl" />
        </button>
      </header>
      <div className="content">
        <div className="box left-box">
          <div className="boxcontent">
            <h3>Pick Base</h3>
            <div className="buttonbox">
              <OptionSet
                firstOption={"First Test"}
                secondOption={"Second Test"}
              />
            </div>
            <h3>Pick Options</h3>
            <div className="buttonbox">
              <OptionSet
                firstOption={"Next Button Test"}
                secondOption={"Button Test"}
              />
              <OptionSet
                firstOption={"Next Test test"}
                secondOption={"That Test"}
              />
              <OptionSet
                firstOption={"Test test test"}
                secondOption={"Testing"}
              />
            </div>
          </div>
        </div>
        <div className="box right-box"></div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { REACT_APP_TEST } = process.env;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Variable: {REACT_APP_TEST}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

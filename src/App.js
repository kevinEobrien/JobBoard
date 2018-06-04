import React, { Component } from "react";
import logo from "./logo.svg";
import breifcase from "./breifcase.png"
import "./App.css";
import List from "./components/List"

class App extends Component {
  render() {
    let jobs= ["Vertafore", "Vox","Loxo","Agent Legend","Popsockets"]
    return (
      <div className="App">
        <header className="App-header">
          <img src={breifcase} class="App-logo" alt="logo" />
          <h1 className="App-title">Welcome ToYour Job Journey</h1>
        </header>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List title="list-of-things" fruit={["Peas", "Carrots", "Apples"]} jobs={jobs}/>
      </div>
    );
  }
}

export default App;

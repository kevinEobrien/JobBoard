import React, { Component } from "react";
import breifcase from "./breifcase.png";
import "./App.css";
import List from "./components/List";
import Board from "./components/Board";

class App extends Component {

  render() {
    const title = ["Wish List", "Applied", "Interview",
      "Offer", "Rejected"];
    const BoardCards = title.map((title, ind) => (
      <Board title={title}
        job={jobs.filter(status === "applied")} />
    ))
    return (
      <div className="App" >
        <header className="App-header">
          <img src={breifcase} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Your Job Journey</h1>
        </header>
        <div className="App-body">
          <aside></aside>
          {BoardCards}
        </div>
      </div>
    );
  }
}

export default App;

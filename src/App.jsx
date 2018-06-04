import React, { Component } from "react";
import breifcase from "./breifcase.png"
import "./App.css";
import List from "./components/List"
import Wishlist from "./components/Wishlist"
import Applied from "./components/Applied"
import Interview from "./components/Interview"
import Offer from "./components/Offer"
import Rejected from "./components/Rejected"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={breifcase} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To Your Job Journey</h1>
        </header>
        <div className="App-body">
          <aside></aside>
          <Wishlist />
          <Applied />
          <Interview />
          <Offer />
          <Rejected />
        </div>
      </div>
    );
  }
}

export default App;

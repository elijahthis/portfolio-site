import React, { Component } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Interests from "./components/Interests";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Work />} path="/work" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Interests />} path="/interests" />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

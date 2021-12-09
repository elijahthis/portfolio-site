import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavContext } from "./Contexts/NavContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Interests from "./components/Interests";

// import logo from "./logo.svg";
import "./css/main.css";

const App = () => {
  const [ind, setInd] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <>
      <BrowserRouter>
        <div className={`App ${theme}`}>
          <div style={{ minHeight: "100vh" }}>
            <NavContext.Provider value={{ ind, setInd, theme, setTheme }}>
              <Navbar />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Work />} path="/work" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Interests />} path="/interests" />
              </Routes>
            </NavContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavContext } from "./Contexts/NavContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Interests from "./components/Interests";
import Error404 from "./components/404";
import "./css/main.css";
import "./App.css";

const App = () => {
  const [ind, setInd] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  return (
    <>
      <HashRouter>
        <div className={`App ${theme}`}>
          <div style={{ minHeight: "100vh" }}>
            <NavContext.Provider value={{ ind, setInd, theme, setTheme }}>
              <Navbar />
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} path="/" />
                  <Route element={<Work />} path="work" />
                  <Route element={<Contact />} path="contact" />
                  <Route element={<Interests />} path="interests" />
                  <Route element={<Error404 />} path="*" />
                </Route>
              </Routes>
            </NavContext.Provider>
          </div>
        </div>
      </HashRouter>
    </>
  );
};

export default App;

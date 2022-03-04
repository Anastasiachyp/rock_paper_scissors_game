import React from "react";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import Hello from "./components/Hello";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Hello />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
        <Game />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
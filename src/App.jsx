import React from "react";
import Home from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Rules from "./components/Rules";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Home />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
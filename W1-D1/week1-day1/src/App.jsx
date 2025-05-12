import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

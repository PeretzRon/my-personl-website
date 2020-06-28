import React from 'react';
import './App.css';
import Header from "./components/Haeder/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Footer/>
      </div>
  );
}

export default App;

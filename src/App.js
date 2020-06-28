import React from 'react';
import './App.css';
import Header from "./components/Haeder/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
      <main>
        <Header/>
        <AboutMe/>
        <Skills/>
      </main>
  );
}

export default App;

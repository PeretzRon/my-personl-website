import React from 'react';
import './App.css';
import Header from "./components/Haeder/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

function App() {
    const [showTagCloud, setShowTagCloud] = React.useState(false);

    function onChange(isVisible) {
        setShowTagCloud(!isVisible);
    }

    return (
        <div>
            <SideBar/>
            <Header change={onChange}/>
            <AboutMe/>
            {<Skills showCloud={showTagCloud}/>}
            <Footer/>
        </div>
    );
}

export default App;

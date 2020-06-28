import React from "react";
import classes from './AboutMe.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';

const AboutMe = () => {
    return (
       <section className={classes.AboutMeSection}>
           <ScrollAnimation animateOnce={true} animateIn="fadeIn"  offset={300} >
               <Typist avgTypingDelay={15}>
                   <div  className={classes.Info}>
                       <h2>Hey there! </h2>
                       <p>
                           My name is Ron Peretz, and I’m a graduated Computer Science
                           at HIT.
                       </p>
                       <p>
                           I love to solve problems. Whether it’s finding the most elegant way to write a line of code or figuring out which way fits best into a progression,
                           I love the challenge of finding a way and discovering solutions.
                           <br/>
                           Maybe that’s why I love writing and the satisfaction that comes from finding just the right word.
                           <br/>
                           I don't have much experience but talented and learn quickly.
                           <br/>
                           <span style={{fontWeight:"bold"}}>Now looking for my first development job.</span>
                       </p>
                   </div>
               </Typist>
           </ScrollAnimation>

       </section>
    )
};

export default AboutMe;

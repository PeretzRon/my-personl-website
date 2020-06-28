import React from "react";
import classes from './AboutMe.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';

const AboutMe = () => {
    return (
        <section className={classes.AboutMeSection}>
            <ScrollAnimation animateOnce={true} animateIn="fadeIn" offset={300}>
                <div className={classes.Info}>
                    <ScrollAnimation animateOnce={true} animateIn="bounceInDown">
                        <h2>Hey there! </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateOnce={true} animateIn="bounceInLeft">
                        <p>
                            My name is Ron Peretz, and I’m a graduated Computer Science
                            at HIT.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
                        <p>
                            I love to solve problems. Whether it’s finding the most elegant way to write a line of code
                            or figuring out which way fits best into a progression,
                            I love the challenge of finding a way and discovering solutions.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
                        <p>
                            Maybe that’s why I love writing and the satisfaction that comes from finding just the
                            right word.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
                        <p>
                            I don't have much experience but talented and learn quickly.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
                        <p>
                            <span style={{fontWeight: "bold"}}>Now looking for my first development job.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </ScrollAnimation>

        </section>
    )
};

export default AboutMe;

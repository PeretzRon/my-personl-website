import React from "react";
import classes from './Header.module.css'
import Particles from 'react-tsparticles';
import VisibilitySensor from "react-visibility-sensor";

const Header = props => {

    return (
        <section className={classes.HeaderSection}>
            <VisibilitySensor offset={{top:170}} partialVisibility={true} onChange={props.change}>
                <Particles className={classes.Animation} canvasClassName={classes.Canvas} id="tsparticles" params={{
                    background: {
                        color: {
                            value: "rgb(0,0,0)"
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                                speed: 3
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 6,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }} />
            </VisibilitySensor>
                <div className={classes.G}>
                    <img className={[classes.ProfileImage, 'animate__animated',  'animate__zoomInLeft'].join(' ')} src={require('../../resources/myPic.png')} alt='Profile'/>
                    <h1 className={[classes.Name, 'animate__animated', 'animate__zoomInRight'].join(' ')}>
                        <span className={classes.FirstName}>Ron </span>
                        <span className={classes.LastName}> Peretz</span>
                    </h1>
                </div>
        </section>

    )
};

export default React.memo(Header);

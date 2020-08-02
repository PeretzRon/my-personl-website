import React, {useEffect} from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import classes from './CloudSkills.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const CloudSkills = props => {
    const [, setState] = React.useState({});
    const [width, setWidth] = React.useState(window.innerWidth);

    const styles = {
        size90: {
            fontSize: width > 750 ? 90 : 60,
            fontWeight: 'bold',
        },
        size80: {
            fontSize: width > 750 ? 80 : 50,
            fontWeight: 'bold'
        },
        size70: {
            fontSize: width > 750 ? 70 : 40,
            fontWeight: 'bold'
        },
        size60: {
            fontSize: width > 750 ? 66 : 30,
            fontWeight: 'bold'
        },
        size50: {
            fontSize: width > 750 ? 50 : 20,
            fontWeight: 'bold'
        },
        small: {
            opacity: 0.7,
            fontSize: 30
        },
        style1: {
            fontFamily: 'serif',
            fontSize: width > 750 ? 60 : 30,
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
        style2: {fontStyle: 'italic', fontSize: '50'},
        style3:
            {
                fontStyle: 'courier',
                fontSize: width > 750 ? 50 : 20,
            },
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);

        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setState({});
        }, 3000);

        return () => clearInterval(interval);

    }, [])

    return (
        <section className={classes.CloudTag}>
            <ScrollAnimation offset={40} animateOnce={true} animateIn="bounceInDown">
                <div className={classes.HeaderWrapper}>
                    <h1 className={classes.SkillHeader}>Skills</h1>
                </div>
            </ScrollAnimation>
            {props.showCloud && <div className={classes.AppOuter}>
                <div className={classes.AppInner}>
                    <TagCloud
                        className={classes.TagCloud}
                        style={{
                            fontFamily: 'sans-serif',
                            //fontSize: () => Math.round(Math.random() * 50) + 16,
                            fontSize: 30,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        <div
                            style={{
                                fontFamily: 'serif',
                                fontSize: 40,
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                color: randomColor()
                            }}>OOP
                        </div>
                        <div style={{...styles.size90, color: randomColor()}}>React</div>
                        <div style={{...styles.size90, color: randomColor()}}>JavaScript</div>
                        <div style={{...styles.size90, color: randomColor()}}>Java</div>
                        <div style={styles.size80}>CSS</div>
                        <div style={styles.size70}>HTML</div>
                        <div style={{...styles.size90, color: randomColor()}}>Android</div>
                        <div style={{fontFamily: 'courier', fontSize: 50}}>Redux</div>
                        <div style={{fontFamily: 'courier'}}>Elasticsearch</div>
                        <div style={styles.size50}>Python</div>
                        <div style={styles.style2}>C++</div>
                        <div style={{fontWeight: 200}}>C</div>
                        <div style={styles.size60}>Kibana</div>
                        <div style={{...styles.size70, color: randomColor()}}>SQL</div>
                        <div style={styles.size60}>MS Office</div>
                        <div style={styles.style1}>React Router</div>
                        <div style={styles.size50}>C#</div>
                        <div style={styles.size50}>REST</div>
                        <div style={styles.small}>Node.js</div>
                        <div style={styles.small}>MongoDB</div>
                    </TagCloud>
                </div>
            </div>}


        </section>
    );

}

export default CloudSkills;

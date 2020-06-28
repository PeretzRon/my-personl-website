import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import classes from './CloudSkills.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const styles = {
    large: {
        fontSize: 90,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 25
    }
};

class CloudSkills extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 2000);
    }

    render() {
        return (
            <section className={classes.CloudTag}>
                <ScrollAnimation offset={40} animateOnce={true} animateIn="bounceInDown">
                    <div className={classes.HeaderWrapper}>
                        <h1 className={classes.SkillHeader}>Skills</h1>
                    </div>
                </ScrollAnimation>

                    <div className={classes.AppOuter}>
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
                                    }}>OOP</div>
                                <div style={styles.large}>React</div>
                                <div style={styles.large}>JavaScript</div>
                                <div style={styles.large}>Java</div>
                                <div style={styles.large}>CSS</div>
                                <div style={styles.large}>HTML</div>
                                <div style={styles.large}>Android</div>
                                <div style={{fontFamily: 'courier'}}>Redux</div>
                                <div style={{fontFamily: 'courier'}}>Elasticsearch</div>
                                <div style={{fontSize: 30}}>Python</div>
                                <div style={{fontStyle: 'italic'}}>C++</div>
                                <div style={{fontWeight: 200}}>C</div>
                                <div style={{color: 'green'}}>Kibana</div>
                                <div>SQL</div>
                                <div>MS Office</div>
                                <div>React Router</div>
                                <div>C#</div>
                                <div style={styles.small}>Node.js</div>
                                <div style={styles.small}>MongoDB</div>
                            </TagCloud>
                        </div>
                    </div>


            </section>
        );
    }
}

export default CloudSkills;

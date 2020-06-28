import React from "react";
import classes from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icons from '@fortawesome/free-brands-svg-icons'


const Footer = props => {
    return (
        <footer>
            <div className={classes.mainRow}>
                <div className={classes.copyRight}>
                    <p>Copyright &copy; Ron Peretz.<br className={classes.BreakLine}/> All rights reserved</p>
                </div>
                <div className={classes.socialLinks}>
                    <ul >
                        <li><a href="https://www.facebook.com/ron.peretz.334/" rel="noopener noreferrer" target='_blank'><FontAwesomeIcon className={classes.ionSocialFacebook} icon={icons.faFacebookSquare}/></a></li>
                        <li><a href="https://www.linkedin.com/in/ron-peretz-0597a3172/" rel="noopener noreferrer" target='_blank'><FontAwesomeIcon className={classes.ionSocialLinkedIn} icon={icons.faLinkedin}/></a></li>
                        <li><a href="https://github.com/PeretzRon" rel="noopener noreferrer" target='_blank'><FontAwesomeIcon className={classes.ionSocialGitHub} icon={icons.faGithubSquare}/></a></li>
                    </ul>
                </div>
                <div className={classes.Resume}>
                    <a href='https://www.dropbox.com/s/8k5ifc9bh1qepuj/Resume%20-%20Ron%20Peretz.pdf?dl=0'  rel="noopener noreferrer" target='_blank' >My Resume</a>
                    <a className={classes.Plank} href='https://days-plank-challenge.web.app/'  rel="noopener noreferrer" target='_blank' >Have you heard about the Plank challenge?</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;

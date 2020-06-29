import React from "react";
import './SideBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icons from '@fortawesome/free-brands-svg-icons';
import * as icon from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {

    return (

        <ul id="social-sidebar">
            <li>
                <a href='https://twitter.com/ronPeretz10' rel="noopener noreferrer" target='_blank' className="twitter"> <FontAwesomeIcon icon={icons.faTwitter}/><span>Tweeter</span></a>
            </li>
            <li>
                <a href='https://www.facebook.com/ron.peretz.334' rel="noopener noreferrer" target='_blank' className="facebook"> <FontAwesomeIcon icon={icons.faFacebookSquare}/><span>Facebook</span></a>
            </li>
            <li>
                <a href='https://discord.gg/Pww5v6c' rel="noopener noreferrer" target='_blank' className="discord"> <FontAwesomeIcon icon={icons.faDiscord}/><span>Discord</span></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/ron-peretz-0597a3172/' rel="noopener noreferrer" target='_blank' className="linkedin"><FontAwesomeIcon icon={icons.faLinkedinIn}/><span>LinkedIn</span></a>
            </li>
            <li>
                <a href='https://github.com/PeretzRon' rel="noopener noreferrer" target='_blank' className="github"><FontAwesomeIcon icon={icons.faGithub}/><span>Github</span></a>
            </li>
            <li>
                <a href='mailto:ron.peretz1@gmail.com' rel="noopener noreferrer" target='_blank' className="mail"><FontAwesomeIcon icon={icon.faEnvelope}/><span>Email</span></a>
            </li>
        </ul>

    )

}

export default SideBar;

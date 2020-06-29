import React from "react";
import CloudSkills from "./CloudSkills/CloudSkills";
// import SkillsBar from "./SkillsBar/SkillsBar";
import classes from './Skills.module.css'

const Skills = props => {
    return (
        <div className={classes.SkillsSection}>
            {/*<SkillsBar/>*/}
            <CloudSkills showCloud={props.showCloud}/>
        </div>
    )

}

export default React.memo(Skills);

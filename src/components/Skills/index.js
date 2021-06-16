import { Typography } from "@material-ui/core";
import Technologies from "../Technologies";
import { useStyles } from "./styles";


const Skills = ({ id, title, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3" align="center">{title}</Typography>
                <Technologies />
            </div>
        </div>
    )
}

export default Skills;
import { Typography } from "@material-ui/core";
import Aptitudes from "../Aptitudes";
import { useStyles } from "./styles";


const Personality = ({ id, title, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3" align="center">{title}</Typography>
                <Aptitudes />
            </div>
        </div>
    )
}

export default Personality;
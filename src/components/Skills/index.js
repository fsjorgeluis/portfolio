import { makeStyles, Typography } from "@material-ui/core";
import Technologies from "../Technologies";


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

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: theme.palette.secondary.main,
        color: "#FFF",
    },
    sectionContent: {
        maxWidth: "80vw",
        margin: "0 auto",
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {

        },
    },
}));

export default Skills;
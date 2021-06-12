import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import TypeWriterEffect from 'react-typewriter-effect';
import me from '../../images/me.jpg';
import cv from '../../images/test-cv.pdf';

const About = ({ id, title, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3">{title}</Typography>

                <Card className={classes.card}>
                    <CardMedia image={me} className={classes.cardMedia} title="avatar" />
                    <CardContent className={classes.cardContent}>
                        <TypeWriterEffect
                            text="Hi, I am Jorge Fernández"
                            textStyle={{ fontSize: "2rem", fontWeight: "700px", color: "#F72C25" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />

                        <TypeWriterEffect
                            text="And I'm an awesome Frontend Developer"
                            textStyle={{ fontSize: "1.2rem", fontWeight: "500px" }}
                            startDelay={2500}
                            cursorColor="black"
                            typeSpeed={100}
                        />

                        <Typography variant="h6" color="textSecondary">
                            Texto que describre como somos de buenos programadores
                            y lo mucho que vamos a aportar a la empresa que nos contrate...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.downloadButton}>
                            <a href={cv} download>
                                Download CV
                            </a>
                        </Button>
                    </CardActions>
                </Card>

            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: "#424242",
        color: "#fff",
    },
    sectionContent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative"
    },
    cardMedia: {
        width: "250px",
        height: "auto",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardContent: {
        marginTop: theme.spacing(2),
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        }
    },
    downloadButton: {
        position: "absolute",
        bottom: "2.5rem",
        right: "2rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "2rem"
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: "#FFF",
        },
        "& a": {
            color: "#FFF",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover": {
            color: "tomato"
        }
    }
}));

export default About;
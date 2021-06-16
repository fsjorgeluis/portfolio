import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Typewriter from 'typewriter-effect';
import me from '../../images/me.jpg';
import cv from '../../images/test-cv.pdf';

const About = ({ id, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>

                <Card className={classes.card}>
                    <CardMedia image={me} className={classes.cardMedia} title="avatar" />
                    <CardContent className={classes.cardContent}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>What's up! yo,</span>")
                                    .typeString('<br>')
                                    .pauseFor(300)
                                    .typeString("<span style='font-size: 2rem; font-weight: bold; color: #FF7043'>I'm Jorge Fernández.</span>")
                                    .typeString('<br>')
                                    .pauseFor(300)
                                    .typeString("<span style='font-size: 1.2rem; font-weight: bold'>And I ❤️ doing stuff as fullstack developer!</span>")
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                            options={{
                                loop: true,
                                cursor: "__"
                            }}
                        />

                        <Typography variant="h6" color="textSecondary">
                            C'mon, scroll down and know more about me, or if you are lazy one
                            download my cv <a href={cv} download>clicking here</a> or obviously on the right side bottom corner button. Cheers 😄
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
        background: theme.palette.secondary.main,
        color: "#FFF",
    },
    sectionContent: {
        maxWidth: "80vw",
        margin: "0 auto",
        paddingTop: "4vh",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative"
    },
    cardMedia: {
        width: "400px", //250px
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
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center"
        },
    },
    downloadButton: {
        position: "absolute",
        bottom: "2.5rem",
        right: "2rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "2rem"
        },
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        "& a": {
            color: "#FFF",
            textDecoration: "none",
            fontWeight: 900,
        },
    }
}));

export default About;
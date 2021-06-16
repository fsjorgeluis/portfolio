import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@material-ui/core";
import Typewriter from "typewriter-effect";
import { useStyles } from "./styles";
import me from '../../images/me.jpg';
import cv from '../../images/cv.pdf';

const About = ({ id, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>

                <Card className={classes.card}>
                    <CardMedia image={me} className={classes.cardMedia} title="avatar" />
                    <CardContent className={classes.cardContent}>
                        <Container fixed className={classes.cardContentContainer}>
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
                                    cursor: "_"
                                }}
                            />
                            <Typography variant="h6" color="textSecondary">
                                C'mon, scroll down and know more about me, or if you are lazy one
                                download my cv <a href={cv} download>clicking here</a> or obviously on the right side bottom corner button. Cheers 😄
                            </Typography>
                        </Container>
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
    );
}

export default About;
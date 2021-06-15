import { makeStyles, Paper, Typography } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@material-ui/lab";
import StartRating from "../Rating";


const Aptitudes = () => {
    const classes = useStyles();

    const skills = [
        {
            src: "",
            title: "Proactivity",
            stars: 5,
        },
        {
            src: "",
            title: "Enthusiastic",
            stars: 5,
        },
        {
            src: "",
            title: "Positive attitude",
            stars: 5,
        },
        {
            src: "",
            title: "Comunication",
            stars: 5,
        },
        {
            src: "",
            title: "Leadership",
            stars: 5,
        },
        {
            src: "",
            title: "Teamwork",
            stars: 5,
        },
        {
            src: "",
            title: "Capacity of learn",
            stars: 5,
        },
        {
            src: "",
            title: "Coffee drinker",
            stars: 5,
        },
    ];

    return (
        <Timeline align="right">
            {
                skills.map(({ src, title, stars }, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <img src={src} alt={title} className={classes.customLogo} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className={classes.lineContent}>
                                <Typography variant="h6" component="h1">
                                    {title}
                                </Typography>
                                <StartRating stars={stars} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );
}

const useStyles = makeStyles((theme) => ({
    customLogo: {
        width: "25px",
    },
    lineContent: {
        padding: "6px 16px",
        // maxWidth: "200px",
        marginLeft: "20vw"
    }
}));

export default Aptitudes;
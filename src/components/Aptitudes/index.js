import { makeStyles, Paper, Typography } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from "@material-ui/lab";
import StartRating from "../Rating";
import proactivityIcon from "../../images/aptitudes/skills.png";
import enthusiastIcon from "../../images/aptitudes/enthusiast.png";
import positiveIcon from "../../images/aptitudes/positive-thinking.png";
import comunicationIcon from "../../images/aptitudes/conversation.png";
import leaderIcon from "../../images/aptitudes/leadership.png";
import teamworkIcon from "../../images/aptitudes/united.png";
import learnIcon from "../../images/aptitudes/learning.png";
import coffeeIcon from "../../images/aptitudes/coffee-cup.png";


const Aptitudes = () => {
    const classes = useStyles();

    const skills = [
        {
            src: proactivityIcon,
            title: "Proactivity",
            stars: 5,
        },
        {
            src: enthusiastIcon,
            title: "Enthusiastic",
            stars: 5,
        },
        {
            src: positiveIcon,
            title: "Positive attitude",
            stars: 5,
        },
        {
            src: comunicationIcon,
            title: "Comunication",
            stars: 5,
        },
        {
            src: leaderIcon,
            title: "Leadership",
            stars: 5,
        },
        {
            src: teamworkIcon,
            title: "Teamwork",
            stars: 5,
        },
        {
            src: learnIcon,
            title: "Capacity of learn",
            stars: 5,
        },
        {
            src: coffeeIcon,
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
        width: "35px",
    },
    lineContent: {
        padding: "6px 16px",
        // maxWidth: "200px",
        marginLeft: "20vw"
    }
}));

export default Aptitudes;
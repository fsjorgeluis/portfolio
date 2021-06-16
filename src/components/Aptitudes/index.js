import { makeStyles, Paper, Typography } from "@material-ui/core";
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from "@material-ui/lab";
import StartRating from "../Rating";
import proactivityIcon from "../../images/aptitudes/skills.png";
import creativityIcon from "../../images/aptitudes/creativity.svg";
import enthusiastIcon from "../../images/aptitudes/enthusiast.png";
import positiveIcon from "../../images/aptitudes/positive-thinking.png";
import comunicationIcon from "../../images/aptitudes/conversation.png";
import leaderIcon from "../../images/aptitudes/leadership.png";
import teamworkIcon from "../../images/aptitudes/united.png";
import responsabilityIcon from "../../images/aptitudes/responsibility.png";
import honestityIcon from "../../images/aptitudes/honest.png";
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
            src: creativityIcon,
            title: "Creativity",
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
            src: responsabilityIcon,
            title: "Responsability",
            stars: 5,
        },
        {
            src: honestityIcon,
            title: "Honestity",
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
            cups: true,
        },
    ];

    return (
        <div className={classes.timeline}>
            <Timeline align="right">
                {
                    skills.map(({ src, title, stars, cups }, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <img src={src} alt={title} className={classes.customLogo} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.lineContent}>
                                    {/* variant="h6" */}
                                    <Typography variant="subtitle1" component="h1">
                                        {title}
                                    </Typography>
                                    <StartRating stars={stars} cups={cups} />
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    timeline: {
        paddingTop: theme.spacing(2),
    },
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
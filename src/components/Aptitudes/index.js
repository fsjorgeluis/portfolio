import { Paper, Typography } from "@material-ui/core";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineSeparator
} from "@material-ui/lab";
import StartRating from "../Rating";
import { skills } from "../../data";
import { useStyles } from "./styles";


const Aptitudes = () => {
    const classes = useStyles();
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

export default Aptitudes;
import { Paper, Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <div className={classes.timeline}>
            <Timeline align="right">
                {
                    skills.map(({ id, src, title, stars, cups }, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <img src={src} alt={title} className={classes.customLogo} />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.lineContent}>
                                    <Typography variant="subtitle1" component="h1">
                                        {t(`personality.${id}`)}
                                        {/* {title} */}
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
import { Paper, Typography } from '@material-ui/core';
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineSeparator
} from '@material-ui/lab';
import StartRating from '../Rating';
import { useStyles } from './styles';
import { techs } from '../../data/index';

const Technologies = () => {
    const classes = useStyles();
    return (
        <div className={classes.timeline}>
            <Timeline align="left">
                {
                    techs.map(({ src, title, stars }, index) => (
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
                                    <StartRating stars={stars} />
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    );
}

export default Technologies;
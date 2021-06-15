import { makeStyles, Paper, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@material-ui/lab';
import StartRating from '../Rating';
import nodejsIcon from '../../images/techs/nodejs-icon.svg';
import expressIcon from '../../images/techs/express.svg';
import jsIcon from '../../images/techs/javascript.svg';
import tsIcon from '../../images/techs/typescript.svg';
import graphqlIcon from '../../images/techs/graphql.svg';
import reactIcon from '../../images/techs/react-2.svg'
import reduxIcon from '../../images/techs/redux.svg';
import html5Icon from '../../images/techs/html5-icon.svg';
import css3Icon from '../../images/techs/css-icon.svg';
import phpIcon from '../../images/techs/php.svg';
import databaseIcon from '../../images/techs/database-icon.svg';

const Technologies = () => {
    const classes = useStyles();

    const techs = [
        {
            src: nodejsIcon,
            title: "NodeJs oriented to web development",
            stars: 4,
        },
        {
            src: expressIcon,
            title: "Express for rest api development",
            stars: 4,
        },
        {
            src: jsIcon,
            title: "JavaScript ES6",
            stars: 4,
        },
        {
            src: tsIcon,
            title: "TypeScript for better js development",
            stars: 4,
        },
        {
            src: graphqlIcon,
            title: "Graphql for better data management and avoid overfetch",
            stars: 3,
        },
        {
            src: reactIcon,
            title: "Rectjs working with classes and/or hooks, making functional things on web",
            stars: 3,
        },
        {
            src: reduxIcon,
            title: "Redux for reactjs, making usefull unique source of truth",
            stars: 3,
        },
        {
            src: html5Icon,
            title: "HTML5, everybody shoud know this :D",
            stars: 4,
        },
        {
            src: css3Icon,
            title: "CSS3 vanilla as well working with libraries and frameworks like tailwind and bootstrap",
            stars: 3,
        },
        {
            src: phpIcon,
            title: "PHP vanilla and common frameworks like laravel as well cms like wordpress",
            stars: 4,
        },
        {
            src: databaseIcon,
            title: "Relational and no-Relational database management",
            stars: 4,
        },
    ];

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

const useStyles = makeStyles((theme) => ({
    customLogo: {
        width: "30px",
    },
    lineContent: {
        padding: "6px 16px",
    },
    timeline: {
        paddingTop: "2vh",
    },
}));

export default Technologies;
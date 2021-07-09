import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Typography
} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';
import { useStyles } from "./styles";
import me from '../../images/me.jpg';
import cv from '../../images/cv.pdf';
import { Avatar } from "@material-ui/core";

const About = ({ id, dark }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>

                <Card className={classes.card}>
                    <CardMedia image={me} className={classes.cardMedia} title="avatar" />
                    <CardContent className={classes.cardContent}>
                        <Container maxWidth="lg" className={classes.cardContentContainer}>
                            <Container fixed className={classes.cardContentContainerHeader}>
                                <Typography variant="h1">
                                    {t('aboutSection.title1')}
                                </Typography>
                                <Typography variant="h1">
                                    {t('aboutSection.title2')}
                                </Typography>
                                <Typewriter
                                    options={{
                                        strings: `${t('aboutSection.subtitle')}`,
                                        autoStart: true,
                                        loop: true,
                                        cursor: '_',
                                    }}
                                />
                                <Typography variant="h6" color="textSecondary">
                                    {t('aboutSection.content')}
                                </Typography>
                            </Container>
                            <Container fixed className={classes.cardContentContainerSocial}>
                                <Container fixed className={classes.cardContentContainerSocialHeader}>
                                    <span>{t('aboutSection.networks')}</span>
                                </Container>
                                <Container fixed className={classes.cardContentContainerSocialContent}>
                                    <Avatar>
                                        <a href="https://www.instagram.com/linktodev/" target="_blank" rel="noopener noreferrer">
                                            <InstagramIcon />
                                        </a>
                                    </Avatar>
                                    <Avatar>
                                        <a href="https://github.com/fsjorgeluis" target="_blank" rel="noopener noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </Avatar>
                                    <Avatar>
                                        <a href="https://www.linkedin.com/in/jorge-luis-fern%C3%A1ndez-sarmiento-030a13166/" target="_blank" rel="noopener noreferrer">
                                            <LinkedInIcon />
                                        </a>
                                    </Avatar>
                                    <Avatar>
                                        <a href="https://twitter.com/fsjorgeluis" target="_blank" rel="noopener noreferrer">
                                            <TwitterIcon />
                                        </a>
                                    </Avatar>
                                </Container>
                            </Container>
                        </Container>
                    </CardContent>
                    <CardActions>

                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            href={cv}
                            download
                            className={classes.downloadButton}
                            startIcon={<GetAppRoundedIcon />}
                        >
                            {t('aboutSection.downloadButton')}
                        </Button>

                    </CardActions>
                </Card>

            </div>
        </div>
    );
}

export default About;
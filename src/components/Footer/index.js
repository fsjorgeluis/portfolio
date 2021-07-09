import { IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useStyles } from "./styles";

const Footer = ({ dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${dark && classes.sectionDark}`}>
            <footer>
                <div className={classes.social}>
                    <IconButton>
                        <a href="https://www.instagram.com/linktodev/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://github.com/fsjorgeluis" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://www.linkedin.com/in/jorge-luis-fern%C3%A1ndez-sarmiento-030a13166/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                        </a>
                    </IconButton>
                    <IconButton>
                        <a href="https://twitter.com/fsjorgeluis" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                    </IconButton>
                </div>
                <Typography variant="body1" className={classes.copyRight}>Jorge Fernández © 2021</Typography>
            </footer>
        </div>
    );
};

export default Footer;
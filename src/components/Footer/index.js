import { IconButton, makeStyles, Typography } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                </div>
                <Typography variant="body1" className={classes.copyRight}>Jorge Fernández © 2021</Typography>
            </footer>
        </div>
    );

};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),

    },
    sectionDark: {
        background: theme.palette.secondary.main,
        color: "#FFF",
    },
    social: {
        textAlign: "center",
        paddingBottom: "25px",
        "& a": {
            fontSize: "24px",
            width: "30px",
            height: "30px",
            lineHeight: "35px",
            display: "inline-block",
            textAlign: "center",
            margin: "0 8px",
            color: "#FFF",
            opacity: "0.75",
        },
        "& a:hover": {
            opacity: "0.9",
        },
    },
    copyRight: {
        marginTop: theme.spacing(1),
        textAlign: "center",
        fontSize: "13px",
        marginBottom: "0",
    },
}));

export default Footer;
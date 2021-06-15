import { useState } from "react";
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Toolbar } from "@material-ui/core";
import { Link, animateScroll as scroll } from 'react-scroll';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import logo from '../../images/logos/logo_2.png';


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const links = [
        {
            id: "about",
            text: "About me",
            icon: <InfoTwoToneIcon fontSize="large" className={classes.about} />
        },
        {
            id: "aptitudes",
            text: "Aptitudes",
            icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.skills} />
        },
        {
            id: "skills",
            text: "Skills",
            icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.skills} />
        },
        {
            id: "jobs",
            text: "My work",
            icon: <BuildTwoToneIcon fontSize="large" className={classes.jobs} />
        },
        {
            id: "contact",
            text: "Get in touch",
            icon: <ContactMailTwoToneIcon fontSize="large" className={classes.contact} />
        }
    ];

    return (
        <>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} className={classes.logo} alt="Logo" />
                    <List className={classes.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link
                                    key={index}
                                    to={id}
                                    spy={true}
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            ))
                        }
                    </List>
                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <IconButton className={classes.drawerCancelButton} onClick={() => setOpen(false)}>
                    <CancelIcon fontSize="large" />
                </IconButton>
                <Divider />
                {
                    links.map(({ id, text, icon }, index) => (
                        <Link
                            key={index}
                            className={classes.sidebar}
                            to={id}
                            spy={true}
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span> {text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FAFAFA",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo: {
        height: "3.7rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },
    about: {
        color: "#A9E5BB"
    },
    aptitudes: {
        color: "#F7B32B"
    },
    skills: {
        color: "#F7B32B"
    },
    jobs: {
        color: "#2D1E2F"
    },
    contact: {
        color: "#2D1E2F"
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#2D1E2F", // Purple Dark
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#F72C25", // Orange like tomato
            borderBottom: "3px solid #F72C25", // Orange like tomato
        }
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "#F72C25", // Orange like tomato
            position: "absolute",
            right: 10,
        }
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 0),
            fontSize: "1.4rem",
            color: "#2D1E2F", // Purple Dark
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "#F72C25", // Orange like tomato
            cursor: "pointer"
        }
    },
    drawerCancelButton: {
        color: "#F72C25", // Orange like tomato
        position: "absolute",
        right: 10,
    }
}));

export default Navbar;
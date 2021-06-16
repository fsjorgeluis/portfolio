import { useState } from "react";
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Toolbar
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import logo from '../../images/logos/logo_2.png';
import { useStyles } from "./styles";


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
            icon: <AccessibilityNewTwoToneIcon fontSize="large" className={classes.aptitudes} />
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img
                        src={logo}
                        className={classes.logo}
                        alt="Logo"
                        onClick={scrollToTop}
                    />
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

export default Navbar;
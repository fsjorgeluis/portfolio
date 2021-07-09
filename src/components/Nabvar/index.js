import { useContext, useState } from "react";
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    Toolbar,
    Menu,
    MenuItem,
    Button
} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import logo from '../../images/logos/logo_2.png';
import { useStyles } from "./styles";
import Internationalization from '../../context/i18n-context';


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { language, setLanguage } = useContext(Internationalization);
    const menuOpen = Boolean(anchorEl);
    const { t } = useTranslation();

    const links = [
        {
            id: "about",
            text: `${t('navigationMenu.about')}`,
            // text: "About me",
            icon: <InfoTwoToneIcon fontSize="large" className={classes.about} />
        },
        {
            id: "aptitudes",
            text: `${t('navigationMenu.aptitudes')}`,
            // text: "Aptitudes",
            icon: <AccessibilityNewTwoToneIcon fontSize="large" className={classes.aptitudes} />
        },
        {
            id: "skills",
            text: `${t('navigationMenu.skills')}`,
            // text: "Skills",
            icon: <EmojiObjectsTwoToneIcon fontSize="large" className={classes.skills} />
        },
        {
            id: "jobs",
            text: `${t('navigationMenu.jobs')}`,
            // text: "My work",
            icon: <BuildTwoToneIcon fontSize="large" className={classes.jobs} />
        },
        {
            id: "contact",
            text: `${t('navigationMenu.contact')}`,
            // text: "Get in touch",
            icon: <ContactMailTwoToneIcon fontSize="large" className={classes.contact} />
        }
    ];

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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

                    <div className={classes.language}>
                        <Button
                            aria-label="language selector"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            startIcon={<TranslateRoundedIcon />}
                            endIcon={<KeyboardArrowDownRoundedIcon />}
                        >
                            {language}
                        </Button>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={menuOpen}
                            onClose={handleClose}
                        >
                            <MenuItem
                                onClick={(e) => {
                                    handleClose();
                                    setLanguage('english');
                                }}>
                                English
                            </MenuItem>
                            <MenuItem
                                onClick={(e) => {
                                    handleClose();
                                    setLanguage('español');
                                }}>
                                Español
                            </MenuItem>
                        </Menu>
                    </div>

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
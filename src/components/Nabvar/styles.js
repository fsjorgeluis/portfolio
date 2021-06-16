import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
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
        height: "3.5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
    },
    about: {
        color: "#A9E5BB"
    },
    aptitudes: {
        color: "#2D1E2F"
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
            color: theme.palette.secondary.main, // Purple Dark
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: theme.palette.primary.main, // Orange like tomato
            borderBottom: "3px solid #F72C25", // Orange like tomato
        }
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: theme.palette.secondary.main, // Orange like tomato
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
            color: theme.palette.secondary.main, // Purple Dark
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: theme.palette.primary.main, // Orange like tomato
            cursor: "pointer"
        }
    },
    drawerCancelButton: {
        color: theme.palette.primary.main, // Orange like tomato
        position: "absolute",
        right: 10,
    }
}));
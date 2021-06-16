import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: theme.palette.secondary.main,
        color: "#FFF",
    },
    sectionContent: {
        maxWidth: "80vw",
        margin: "0 auto",
        paddingTop: "4vh",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    cardMedia: {
        width: "400px", // 250px
        height: "auto",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        [theme.breakpoints.down("sm")]: {
            width: "200px",// test
            maxWidth: "400px",
            height: "auto",
        },
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5),
    },
    cardContent: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
        "& h6": {
            marginTop: theme.spacing(6),
            paddingRight: theme.spacing(6),
            [theme.breakpoints.down("xs")]: {
                display: "none",
            },
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    },
    cardContentContainer: {
        [theme.breakpoints.down("lg")]: {
            width: "55vw",
        },
        [theme.breakpoints.down("md")]: {
            width: "45vw",
        },
        [theme.breakpoints.down("sm")]: {
            width: "45vw", //35vw
        },
        [theme.breakpoints.down("xs")]: {
            width: "70vw",
        },
    },
    downloadButton: {
        position: "absolute",
        bottom: "2.5rem",
        right: "2rem",
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "2rem",
        },
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3),
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        "& a": {
            color: "#FFF",
            textDecoration: "none",
            fontWeight: 900,
        },
    }
}));
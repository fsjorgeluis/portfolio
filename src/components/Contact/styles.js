import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        background: "#FCF6B1",
        color: theme.palette.secondary.main,
        fontSize: "1.2rem",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: theme.spacing(4),
        "& button": {
            backgroundColor: theme.palette.primary.main,
            color: "#FFF",
            fontWeight: 900,
            fontSize: "1.2rem",
            marginTop: theme.spacing(4),
        },
        "& button:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: "#FFF",
        },
    },
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: "#424242",
        color: "#FFF",
    },
    sectionContent: {
        maxWidth: "80vw",
        margin: "0 auto",
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    selection: {
        "& h5": {
            marginTop: theme.spacing(1),
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
    },
    radios: {
        marginTop: theme.spacing(1),
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
    },
    contactForm: {
        display: "flex",
        flexDirection: "column",
    },
}));
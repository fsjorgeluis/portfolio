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
        padding: theme.spacing(4),
    },
    grid: {
        marginTop: theme.spacing(10),
    },
    card: {
        maxWidth: 345,
        minHeight: 275,
        margin: theme.spacing(3),
    },
    cardMedia: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    cardContent: {
        textAlign: "center",
    },
}));
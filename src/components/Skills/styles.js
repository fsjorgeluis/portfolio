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
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {

        },
    },
}));
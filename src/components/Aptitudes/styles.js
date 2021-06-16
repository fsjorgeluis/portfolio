import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    timeline: {
        paddingTop: theme.spacing(2),
    },
    customLogo: {
        width: "35px",
    },
    lineContent: {
        padding: "6px 16px",
        // maxWidth: "200px",
        marginLeft: "20vw"
    }
}));
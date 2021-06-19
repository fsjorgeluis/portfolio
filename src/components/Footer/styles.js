import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
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
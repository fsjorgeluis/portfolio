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
            [theme.breakpoints.between("xs", "md")]: {
                display: "none",
            },
        },
    },
    cardContentContainer: {
        minHeight: '42vh',
        padding: '5px',
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
    cardContentContainerHeader: {
        "& h2": {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: theme.palette.primary.main,
        },
        [theme.breakpoints.between("xs", "sm")]: {
            height: '33vh',
        },
        [theme.breakpoints.up("md")]: {
            height: '30vh',
        },
    },
    cardContentContainerSocial: {
        backgroundColor: "#e3e3e3",
        borderRadius: '10px',
        "& svg": {
            color: theme.palette.primary.main,
        },
        "& svg:hover": {
            color: theme.palette.secondary.main,
        },
        [theme.breakpoints.between("xs", "sm")]: {
            minHeight: '15vh',
            marginTop: '10px',
        },
        [theme.breakpoints.up("md")]: {
            width: '350px',
        },
    },
    cardContentContainerSocialHeader: {
        paddingTop: '1rem',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    cardContentContainerSocialContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [theme.breakpoints.between("xs", "sm")]: {
            height: '10vh',
            '& > *': {
                margin: theme.spacing(1),
                padding: "1px",
                backgroundColor: "#FFFFFF"
            },
        },
        [theme.breakpoints.up("sm")]: {
            padding: "10px",
            marginTop: "10px",
            '& > *': {
                margin: theme.spacing(1),
                padding: "5px",
                backgroundColor: "#FFFFFF"
            },
        },
    },
    downloadButton: {
        position: "absolute",
        color: '#FFFFFF',
        bottom: "2.5rem",
        right: "2rem",
        [theme.breakpoints.down("sm")]: {
            bottom: ".2rem",
            right: ".2rem",
        },
        [theme.breakpoints.up("md")]: {
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
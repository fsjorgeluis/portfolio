import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import { mockData } from "../../data";

const Works = ({ id, title, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        mockData.map(({ title, src, link }, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia image={src} className={classes.cardMedia} title="hero-image" />
                                    <CardContent>
                                        <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectionDark: {
        background: "#424242",
        color: "#fff",
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
}));

export default Works;
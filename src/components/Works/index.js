import { useState } from "react";
import { Card, CardContent, CardMedia, Grid, Link, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useStyles } from "./styles";
import { myWork } from "../../data";

const Works = ({ id, title, dark }) => {
    const [loading, setLoading] = useState(true);
    const classes = useStyles();

    setInterval(() => {
        setLoading(false);
    }, 3000);

    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Grid container className={classes.grid}>
                    {
                        myWork.map(({ title, src, link }, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    {
                                        loading ? (
                                            <Skeleton animation="pulse" variant="rect" className={classes.cardMedia} />
                                        ) : (
                                            <CardMedia image={src} className={classes.cardMedia} title="hero-image" />
                                        )
                                    }
                                    <CardContent className={classes.cardContent}>
                                        {
                                            loading ? (
                                                <>
                                                    <Skeleton animation="pulse" height={10} style={{ marginBottom: 6 }} />
                                                    <Skeleton animation="pulse" height={10} width="80%" />
                                                </>
                                            ) : (
                                                <Link href={link} color="secondary" target="_blank" rel="noopener noreferrer">
                                                    { title}
                                                </Link>
                                            )
                                        }

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div >
    );
}

export default Works;
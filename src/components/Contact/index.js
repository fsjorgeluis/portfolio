import { useState } from "react";
import { Formik } from "formik";
import { Button, makeStyles, Paper, Radio, TextField, Typography } from "@material-ui/core";


const Contact = ({ id, title, dark }) => {
    const [value, setValue] = useState("Say hi");
    const classes = useStyles();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`${classes.section} ${dark && classes.sectionDark}`}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Paper className={classes.root}>
                    <div className={classes.selection}>
                        <Typography variant="h5">CONTACT ME</Typography>
                        <div className={classes.radios}>
                            <span>Talk to me</span>
                            <Radio
                                value="Say hi"
                                checked={value === "Say hi"}
                                color="secondary"
                                onChange={handleChange}
                            />

                            <span>Get a Quote</span>
                            <Radio
                                value="Get a quote"
                                checked={value === "Get a quote"}
                                color="secondary"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Formik
                        initialValues={{ name: "", email: "" }}
                        onSubmit={async values => {
                            await new Promise(resolve => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <>
                            <form className={classes.form}>
                                <TextField label="Your name" />
                                <TextField label="Your e-mail" />
                                {
                                    value === "Get a quote" ? (
                                        <>
                                            <TextField label="Needed services" />
                                            <TextField label="Estimated budget" />
                                        </>
                                    ) : null
                                }
                                <TextField label="Leave a message" />
                            </form>
                            <Button variant="contained">Submit</Button>
                            {/* <Form>
                            <Field name="name" type="text" />
                            <Field name="email" type="email" />
                            <button type="submit">Submit</button>
                        </Form> */}
                        </>
                    </Formik>
                </Paper>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
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
            marginTop: theme.spacing(4),
        },
    },
}));

export default Contact;
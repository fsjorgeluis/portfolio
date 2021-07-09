import { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import {
    Button,
    CircularProgress,
    IconButton,
    Paper,
    Radio,
    Snackbar,
    TextField,
    Typography
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { validate } from "./validation";
import { useStyles } from "./styles";


const Contact = ({ id, title, dark }) => {
    const initialState = {
        redioValue: "Hello",
        toastOpen: false,
        loading: false
    }

    const [state, setState] = useState(initialState);

    const { t } = useTranslation();

    const classes = useStyles();

    const handleChange = (e) => {
        console.log(e)
        setState({ redioValue: e.target.value });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ toastOpen: false });
    };

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            services: '',
            budget: '',
            message: '',
        },
        validate,
        onSubmit: async values => {
            setState({ loading: true });
            try {
                const { data } = await axios.post('https://micro-mailer.herokuapp.com/send', values, config);
                if (data.success) {
                    setState({ toastOpen: true });
                    setState({ loading: false });
                }
                formik.resetForm();
                // alert(JSON.stringify(data, null, 2));
            } catch (error) {
                // alert(JSON.stringify(error));
                alert("Oh no!, we got a problem!.");
            }
        },
    });

    return (
        <>
            <div className={`${classes.section} ${dark && classes.sectionDark}`}>
                <div className={classes.sectionContent} id={id}>
                    <Typography variant="h3">{title}</Typography>
                    <Paper className={classes.root}>
                        <div className={classes.selection}>
                            <Typography variant="h5">{t('contact.subtitle')}</Typography>
                            {/* <Typography variant="h5">CONTACT ME</Typography> */}
                            <div className={classes.radios}>
                                <span>{t('contact.radio1')}</span>
                                {/* <span>Talk to me</span> */}
                                <Radio
                                    value="Hello"
                                    checked={state.radioValue === "Hello"}
                                    color="secondary"
                                    onChange={handleChange}
                                />
                                <span>{t('contact.radio2')}</span>
                                {/* <span>Get a Quote</span> */}
                                <Radio
                                    value="Get a quote"
                                    checked={state.radioValue === "Get a quote"}
                                    color="secondary"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <form className={classes.contactForm} onSubmit={formik.handleSubmit}>
                            <TextField
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                label="Your name"
                                error={formik.errors.name ? formik.errors.name.status : false}
                                helperText={formik.errors.name ? formik.errors.name.message : null}
                            />
                            <TextField
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                label="Your e-mail"
                                error={formik.errors.email ? formik.errors.email.status : false}
                                helperText={formik.errors.email ? formik.errors.email.message : null}
                            />
                            {
                                state.radioValue === "Get a quote" ? (
                                    <>
                                        <TextField
                                            name="services"
                                            onChange={formik.handleChange}
                                            value={formik.values.services}
                                            label="Needed services"
                                            error={formik.errors.services ? formik.errors.services.status : false}
                                            helperText={formik.errors.services ? formik.errors.services.message : null}
                                        />
                                        <TextField
                                            name="budget"
                                            onChange={formik.handleChange}
                                            value={formik.values.budget}
                                            label="Estimated budget"
                                            error={formik.errors.budget ? formik.errors.budget.status : false}
                                            helperText={formik.errors.budget ? formik.errors.budget.message : null}
                                        />
                                    </>
                                ) : null
                            }
                            <TextField
                                name="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                label="Leave a message"
                                error={formik.errors.message ? formik.errors.message.status : false}
                                helperText={formik.errors.message ? formik.errors.message.message : null}
                                multiline
                                rowsMax={4}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={state.loading}
                            >
                                {state.loading ? <CircularProgress size={24} /> : `${t('contact.sendButton')}`}
                            </Button>
                        </form>
                    </Paper>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={state.toastOpen}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Message sent"
                action={
                    <>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                }
            />
        </>
    );
}

export default Contact;

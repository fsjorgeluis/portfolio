import { useState } from "react";
import { useFormik } from "formik";
import {
    Button,
    Paper,
    Radio,
    TextField,
    Typography
} from "@material-ui/core";
import { validate } from "./validation";
import { useStyles } from "./styles";


const Contact = ({ id, title, dark }) => {
    const [value, setValue] = useState("Hello");
    const classes = useStyles();

    const handleChange = (e) => {
        setValue(e.target.value);
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
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                                value="Hello"
                                checked={value === "Hello"}
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
                            value === "Get a quote" ? (
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
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Paper>
            </div>
        </div>
    );
}

export default Contact;
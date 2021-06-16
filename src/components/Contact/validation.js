

export const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = {
            status: true,
            message: 'This is a required field!'
        };
    } else if (values.name.length > 15) {
        errors.name = {
            status: true,
            message: 'Must be 15 characters or less'
        };
    }

    if (!values.email) {
        errors.email = {
            status: true,
            message: 'This is a required field!'
        };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
            status: true,
            message: 'Invalid email address'
        };
    }

    if (!values.message) {
        errors.message = {
            status: true,
            message: 'This is a required field!'
        };
    } else if (values.message.length < 5) {
        errors.message = {
            status: true,
            message: 'Must have more than 5 characters'
        };
    }

    return errors;
};
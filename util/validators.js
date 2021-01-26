
// the const outside of the function means it'll only need to be instantiated once
const { EMAIL_REGEX } = require('../consts/regexes');
// Validates the inputs from registration and login

class Validators {
    static validateRegisterInput (
        username,
        email,
        password,
        confirmPassword
    ) {
        const errors = {};
        // An empty string comes back falsy
        if (!username || !username.trim()) {
            errors.username = 'Username must not be empty';
        }
        if (!email || !email.trim()) {
            errors.email = 'Email must not be empty';
        } else {
            // test() returns a boolean
            if (!EMAIL_REGEX.test(email)) {
                errors.email = 'Email must be a valid email address';
            }
        }
        if (!password) {
            errors.password = 'Password must not be empty';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords must match';
        }

        return {
            errors,
            // 0 will come back as falsy
            valid: !Object.keys(errors).length
        };
    }
    static validateLoginInput (username, password) {
        const errors = {};
        if (!username || !username.trim()) {
            errors.username = 'Username must not be empty';
        }
        if (!password) {
            errors.password = 'Password must not be empty';
        }

        return {
            errors,
            valid: !Object.keys(errors).length
        };
    }
}

module.exports = Validators;
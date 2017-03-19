/** User input validation
 *
 */

const Validation = {

    errors: {
        emailInvalid: 'Please, provide correct email.',
        passwordShort: 'Password should be at least 8 characters long.',
        passwordInvalid: 'Password can contain only listed special characters: !@#$%^&*()',
        passwordMismatch: 'Passwords do no match.',
        nameInvalid: 'Name should not contain special characters.',
        captchaInvalid: 'Please, verify that you are no robot.'
    },

    /**
     * User email validation
     * @params {String} email, pass1, pass2, name
     * @returns {Object}
     */
    validateUser(email = null, pass1 = null, pass2 = null, name = null, captcha = null) {
        // Declare empty errors object to return if validation successful
        let errors = {};

        // Validate each field and save error or null
        const invalidEmail = this.validateEmail(email),
            invalidPassword = this.validatePassword(pass1),
            invalidComparePasswords = this.validateComparePasswords(pass1, pass2),
            invalidName = this.validateName(name),
            invalidCaptcha = this.validateCaptcha(captcha);

        // Check each field validation result and assign errors if there are any
        if (invalidEmail) {
            errors.email = invalidEmail;
        }
        if (!invalidPassword && invalidComparePasswords) {
            errors.password = invalidComparePasswords
        }
        if (invalidPassword) {
            errors.password = invalidPassword;
        }
        if (invalidName) {
            errors.name = invalidName;
        }
        if (invalidCaptcha) {
            errors.message = invalidCaptcha;
        }

        // If there are no errors then return false
        if (Object.keys(errors).length === 0) {
            return false;
        }

        return {errors};
    },
    /**
     * User email validation
     * @param {String} email
     * @returns {String}
     */
    validateEmail(email){
        // Email validation regEx
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email && !reg.test(email)) {
            return this.errors.emailInvalid;
        }
        return null;
    },

    /**
     * User password validation
     * @param {string} pass
     * @returns {String}
     */
    validatePassword(pass) {
        const reg = /([><{}":;\s,|\\/_+])/g;

        if (pass && pass.length < 8) {
            return this.errors.passwordShort;
        }
        if (pass && reg.test(pass)) {
            return this.errors.passwordInvalid;
        }
        return null;
    },

    /**
     * Compare passwords (during sign up)
     * @param {String} pass1
     * @param {String} pass2
     * @returns (String)
     */
    validateComparePasswords(pass1, pass2) {
        if (pass1 && pass2 && pass1 !== pass2) {
            return this.errors.passwordMismatch
        }
        return null;
    },

    /**
     * User name validation
     * @param {String} name
     * @returns (String)
     */
    validateName(name){
        const reg = /^[a-zA-Z ]{2,30}$/;
        if (name && !reg.test(name)) {
            return this.errors.nameInvalid;
        }
        return null;
    },

    /**
     * Captcha client-side validation
     * @param {String} captcha
     * @returns (String)
     */
    validateCaptcha(captcha){
        if (captcha !== null && !captcha.length) {
            return this.errors.captchaInvalid;
        }
        return null;
    }
};

module.exports = Validation;

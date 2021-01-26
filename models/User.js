const { model, Schema } = require('mongoose');
const { EMAIL_REGEX } = require('../consts/regexes');

// MongoDB schema for each user that will be created
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    // Use the Date type and let mongoose instantiate it
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// You can validate the email whenever mongoose tries to upsert
// Mongoose hooks don't work with arrow functions
userSchema.path('email').validate(function (email) {
    return EMAIL_REGEX.test(email);
});
module.exports = model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        default: null,
        unique: true
    },
    password: {
        required: true,
        type: String,
        default: null
    }
})

module.exports = mongoose.model('User', userSchema)
const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    songTitle: {
        required: true,
        type: String
    },
    length: {
        required: true,
        type: String
    }
}, {
    collection : 'songs'
})

module.exports = mongoose.model('Song', trackSchema)
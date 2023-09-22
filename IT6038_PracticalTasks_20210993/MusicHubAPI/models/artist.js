const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        required: true,
        type: String
    },
    origin: {
        required: true,
        type: String
    },
    yearStart: {
        required: true,
        type: Number
    },
    genres: {
        required: true,
        type: [String]
    },
    members: {
        type: [String]
    }
}, {
    collection : 'artists'
})

module.exports = mongoose.model('Artist', artistSchema)


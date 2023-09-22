const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    albumTitle: {
        required: true,
        type: String
    },
    releaseYear: {
        required: true,
        type: Number
    },
    label: {
        required: true,
        type: String
    }
}, {
    collection : 'albums'
})

module.exports = mongoose.model('Album', albumSchema)
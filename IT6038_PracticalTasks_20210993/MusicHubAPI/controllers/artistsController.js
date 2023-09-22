const ModelArtist = require('../models/artist');
const auth = require('../controllers/authController');

// Get all artists
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await ModelArtist.find();
        if (artists.length === 0) {
            return res.status(404).json({ message: 'No artists found' });
        }
        res.json(artists);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
}

// Get an artist by id
exports.getArtistById = async (req, res) => {
    try {
        const id = req.params.id
        const oneArtist = await ModelArtist.findById(id);
        res.json(oneArtist)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Update artist by id
exports.updateArtistById = async (req, res) => {
    try {
        const id = req.query.id;
        const dataToUpdate = req.body;
        const result = await ModelArtist.findByIdAndUpdate(id, dataToUpdate, { new: true })
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
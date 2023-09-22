const ModelSong = require('../models/song');

// Get all songs
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await ModelSong.find();
        if (songs.length === 0) {
            return res.status(404).json({ message: 'No songs found' });
        }
        res.json(songs)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get a song by id 
exports.getSongById = async (req, res) => {
    try {
        const id = req.params.id;
        const oneSong = await ModelSong.findById(id);
        res.json(oneSong)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Delete song by id
exports.deleteSongById = async (req, res) => {
    try {
        const id = req.query.id;
        const deletedSong = await ModelSong.findByIdAndDelete(id);
        res.send(`${deletedSong.songTitle} has been deleted.`)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
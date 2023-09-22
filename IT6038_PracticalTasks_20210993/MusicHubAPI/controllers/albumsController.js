const ModelAlbum = require('../models/album');

// Get all albums
exports.getAllAlbums = async (req, res) => {
    try {
        const albums = await ModelAlbum.find();
        if (albums.length === 0) {
            return res.status(404).json({ message: 'No albums found' });
        }
        res.json(albums)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get an album by id
exports.getAlbumById = async (req, res) => {
    try {
        const id = req.params.id;
        const oneAlbum = await ModelAlbum.findById(id);
        res.json(oneAlbum)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Update album by id
exports.updateAlbumById = async (req, res) => {
    try {
        const id = req.query.id;
        const updatedAlbum = req.body;
        const options = { new: true };
        const result = await ModelAlbum.findByIdAndUpdate(id, updatedAlbum, options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Delete album by id
exports.deleteAlbumById = async (req, res) => {
    try {
        const id = req.query.id;
        const deletedAlbum = await ModelAlbum.findByIdAndDelete(id);
        res.send(`${deletedAlbum.albumTitle} has been deleted.`)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
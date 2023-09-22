require('dotenv').config();
const express = require('express');
const router = express.Router();

const artistController = require('../controllers/artistsController');
const albumController = require('../controllers/albumsController');
const songController = require('../controllers/songsController');
const auth = require('../middleware/tokenAuth');

// Get all artists
// Example: GET http://localhost:3000/artists
router.get('/artists', auth, artistController.getAllArtists );

// Get an artist by id
// Example: GET http://localhost:3000/getArtist/57489374598743
router.get('/getArtist/:id', auth, artistController.getArtistById);

// Update artist
// Example: PATCH http://localhost:3000/updateArtist/57489374598743
router.patch('/updateArtist', auth, artistController.updateArtistById)

// Get all albums
// Example: GET http://localhost:3000/albums
router.get('/albums', auth, albumController.getAllAlbums);

// Get an album by name
// Example: GET http://localhost:3000/getAlbum/57489374598743
router.get('/getAlbum/:id', auth, albumController.getAlbumById);

// Update album
// Example: PATCH http://localhost:3000/updateAlbum/57489374598743
router.patch('/updateAlbum', auth, albumController.updateAlbumById);

// Delete album
// Example: DELETE http://localhost:3000/deleteAlbum?id=57489374598743
router.delete('/deleteAlbum', auth, albumController.deleteAlbumById);

// Get all songs
// Example: GET http://localhost:3000/songs
router.get('/songs', auth, songController.getAllSongs);

// Get one song
// Example: GET http://localhost:3000/getSong
router.get('/getSong/:id', auth, songController.getSongById);

// Delete song
// Example: DELETE http://localhost:3000/deleteSong?id=57489374598743
router.delete('/deleteSong', auth, songController.deleteSongById);

module.exports = router;
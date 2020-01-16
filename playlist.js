const mongoose = require('mongoose')


// build the playlist model
const Playlist = mongoose.model('Playlist', new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    songs: {
        type: [String],
        required: true
    },
    sortBy: {
        type: String,
        enum: ['title','song']
    },
    lastUpdate: {
        type: Date
    }
}));

exports.Playlist = Playlist;
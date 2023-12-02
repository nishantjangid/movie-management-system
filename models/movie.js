const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    director: String,
    releaseDate: Date,    
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

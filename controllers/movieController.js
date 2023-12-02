const Movie = require('../models/movie');

// CRUD operations

// Create a new movie
exports.createMovie = async (req, res) => {
    // Create a new movie instance based on request body
    try {
        let {title,genre,director,releaseDate} = req.body;

        if(!title){
            return req.status(400).json({error:"Please provide title"});
        }

        if(!genre){
            return req.status(400).json({error:"Please provide genre"});
        }

        if(!director){
            return req.status(400).json({error:"Please provide director"});
        }

        if(!releaseDate){
            return req.status(400).json({error:"Please provide release date"});
        }
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Retrieve all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Retrieve a specific movie by ID
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a movie by ID
exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(!movie) return res.status(400).json({error:"Movie not found"});
        
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a movie by ID
exports.deleteMovie = async (req, res) => {
    try {
        let result = await Movie.findByIdAndDelete(req.params.id);
        if(result){            
            return res.status(204).json({message:"Deleted Successfully"});
        }else{
            return res.status(400).json({error:"Movie Not Found!"});
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

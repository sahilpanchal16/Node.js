const express = require('express');
const { getMovie, createMovie , updateMovie, deleteMovie } = require('../controllers/Movie')

const Movie_router = express.Router();

Movie_router.get('/', getMovie)
Movie_router.post('/', createMovie)
Movie_router.put('/:id', updateMovie)
Movie_router.delete('/:id',deleteMovie)




module.exports = { Movie_router }
const Movie = require('../model/Movie');
const { movieSchema } = require('../model/Movie');


const createMovie = async (req, res) => {
    try {
        const req_body = req.body

        const movie = req_body['movie']
        const cast = req_body['cast']
        const director = req_body['director']
        const rating = req_body['rating']
        const year = req_body['year']

        await Movie.create({
            movie: movie,
            cast: cast,
            director: director,
            rating: rating,
            year: year
        })

        res.json({
            msg: 'data created'
        })
    } catch (error) {
        res.json({
            error: error
        })
    }

}

const getMovie = async (req, res) => {
    try {
        const data = await Movie.find()

        res.json({
            data: data
        })      
    } catch (error) {
        res.json({
            error: error
        })
    }
}


const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedMovie = await Movie.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedMovie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }

        res.json({ msg: 'Movie updated successfully', data: updatedMovie });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a movie
const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedMovie = await Movie.findByIdAndDelete(id);

        if (!deletedMovie) {
            return res.status(404).json({ msg: 'Movie not found' });
        }

        res.json({ msg: 'Movie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createMovie, getMovie, updateMovie, deleteMovie };





const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movie: {    
        type: String,
    },
    cast: {
        type: String,
    },
    director: {
        type: String,
    },
    rating: {
        type: Number,
    },
    year: {
        type: Number,
    }
});

module.exports = mongoose.model("Movie", movieSchema)
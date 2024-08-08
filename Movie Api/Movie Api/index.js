const express = require('express');
const mongoose = require('mongoose');
const { Movie_router } = require('./src/routes/Movie');

const app = express();

app.use(express.json());

app.use('/movie', Movie_router);

app.get('/movie', (req, res) => {
    res.json({
        msg: 'my server is running'
    })
})


    app.listen(8000, () => {
        mongoose.connect('mongodb://localhost:27017/Movie')
        console.log('Server is running on port 8000');
    });




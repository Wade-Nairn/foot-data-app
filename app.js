const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const playersRoutes = require('./api/routes/players');
const teamsRoutes = require('./api/routes/teams');
const usersRoutes = require('./api/routes/users');

// Connect to the mongoDB Atlas instance
mongoose.connect(
    'mongodb://admin:'
    + process.env.MONGO_ATLAS_PASSWORD + 
    '@cluster0-shard-00-00-rxwk0.mongodb.net:27017,cluster0-shard-00-01-rxwk0.mongodb.net:27017,cluster0-shard-00-02-rxwk0.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
);

// Morgan for logging
app.use(morgan('dev'));

// body-parser for parsing request and responce data.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Handle CORS error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Resquested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Header-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes for handeling requests
app.use('/players', playersRoutes);
app.use('/teams', teamsRoutes);
app.use('/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
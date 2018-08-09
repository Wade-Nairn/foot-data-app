const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const AgeAverage = require('../models/ageAverage');
const PlayerAverage = require('../models/PlayerAverage');
const RoundAverage = require('../models/RoundAverage');
const SeasonAverage = require('../models/SeasonAverage');

const AveragesController = require('../controllers/averages');

// GET a list of all the averages
router.get('/averages', AveragesController.players_get_all);

// POST to create all the averages first time round
router.post('/averages', AveragesController.create_a_player);

// GET a one of the averages list
router.get(/* ??? */);

// PATCH to update the averages after each round
router.patch('/averages', AveragesController.update_an_average);

// DELETE a player.
router.delete('/:playerId', checkAuth, PlayersController.delete_a_player);

module.exports = router;
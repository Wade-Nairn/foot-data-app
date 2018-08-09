const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Player = require('../models/player');

const PlayersController = require('../controllers/players');

// GET a list of all the players
router.get('/', PlayersController.players_get_all);

// POST to create a new player
router.post('/', checkAuth, PlayersController.create_a_player);

// GET a single player via an id
router.get('/:playerId', PlayersController.players_get_one);

// PATCH to update a single player 
router.patch('/:playerId', checkAuth, PlayersController.update_a_player);

// PATCH to update all players - To Implement
// router.put('/playersupdate', checkAuth, PlayersController.update_all_players);

// DELETE a player.
router.delete('/:playerId', checkAuth, PlayersController.delete_a_player);

module.exports = router;
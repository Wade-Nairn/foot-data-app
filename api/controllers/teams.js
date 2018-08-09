// need to update for admin to post, put, delete. 
// need to remove console.logs and messages. 
// need to create post for all players from excel
// need to create put for all players (data updates).

const Player = require('../models/team');

// Gets all of the current teams
// needs to include basic data
exports.team_get_all = (req, res, next) => {
    Player.find()
    .select('name nicName _id') // Image, Leaderboad position, Name, Nicname
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                teams:docs
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

// Get a team player using the mongoose id
// needs to include basic data.
exports.players_get_one = (req, res, next) => { // Current team stat, points for , points against, 
    const id = req.params.playerId;
    Player
        .findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: "No data found"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
}

// Creates a new player
exports.create_a_player = (req, res, next) => { // Add a new team (NOT currently needed)
    const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
    player
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                createdPlayer: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

// Updates a single team
// Will be used after each round, will need to update data fromt he previous round and the new averages that are calculated in services functions.
// 
exports.update_a_team = (req, res, next) => {
    const id = req.params.playerId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Player
        .update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

// Deletes a team
// Not currently needed.
exports.delete_a_team = (req, res, next) => {
    const id = req.params.playerId;
    Player
        .remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

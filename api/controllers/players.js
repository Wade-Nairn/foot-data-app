// need to update for admin to post, put, delete. 
// need to remove console.logs and messages. 
// need to create post for all players from excel
// need to create put for all players (data updates).

const Player = require('../models/player');

// Gets all of the current players
// needs to include basic data that will be rendered in the overview (UI dependant) 
exports.players_get_all = (req, res, next) => {
    Player.find()
    .select('name number _id ') // season totals? last game totals?
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                players:docs
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

// Get a single player using the mongoose id
// needs to include all the data relating to the player. The full data object.
exports.players_get_one = (req, res, next) => {
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
// Will run once for each player as its scraped the first time round.
exports.create_a_player = (req, res, next) => {
    const player = new Player({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
        //  Calculate season averages for each data point
        //  Calculate career averages for each data point
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

// Updates a single player

// Will need to recalculate averages (round/career) each new round.
// Will need to GET old data -> calculate new averages/totals -> PATCH new data
// Will need a way to calculate if a player has retired.
// Will need to match the current ID of a player to the new data. VIA name & Club what if the club changes? manual patch?

exports.update_a_player = (req, res, next) => {
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

// Deletes a player
// Not Overly nessessary as players only move to retired.
// Add in soft delete?

exports.delete_a_player = (req, res, next) => {
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

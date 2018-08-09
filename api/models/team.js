const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    nickname: {type: String, required:true},
    homeGround: String,
    seasonStats: {
    //     currentSeason: Boolean,    
    //     pointsFor: Number,
    //     pointsAgainst: Number,
    //     gamesPlayed: Number,
    //     gamesWon: Number,
    //     gamesLost: Number,
    //     gamesDrawn: Number, 
    //     currentPoints: Number,
    //     currentLeaderboardPosition: Number,
    //     numberOfAcitvePlayers: Number,
    //     averageScoreByPosition: {
    //          forward: Number,
    //          midfield: Number,
    //          rucks: Number,
    //          defender: Number
    //     }
    //     numberOfhundredsScored: Number,
    //     roundData:{
    //         season: Number,  
    //         round: Number,
    //         homeGame: Boolean,  
    //         groundPlayed: String,
    //         crowdSize: Number,
    //         opponent: String,
    //         scoreFull: Number,
    //         scoreThreeQuarter: Number,
    //         scoreHalf: Number,
    //         scoreQuarter: Number        
    //     }
    }
});

module.exports = mongoose.model('Team', teamSchema);
const mongoose = require('mongoose');

const roundAverageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    round: {type: Number, required: true},
    season: {type: Number, required: true},
    currentRound: {type: Boolean, required: true},
    roundData: {
    //             roundAverageKicks: Number,
    //             roundAverageMarks: Number,
    //             roundAverageHandballs: Number,
    //             roundAverageDisposals: Number,		
    //             roundAverageGoals: Number,
    //             roundAverageBehinds: Number,
    //             roundAverageHitouts: Number,
    //             roundAverageTackles: Number,
    //             roundAverageRebound50s: Number,
    //             roundAverageInside50s: Number,
    //             roundAverageClearences: Number, 
    //             roundAverageCharges: Number,
    //             roundAverageFreeFor: Number,             
    //             roundAverageFreeAgainst: Number,         
    //             roundAverageBrownlowVotes: Number,
    //             roundAverageContestedPositions: Number,              
    //             roundAverageUncontestedPositions: Number,            
    //             roundAverageContestedMarks: Number,           
    //             roundAverageMarksIn50: Number,           
    //             roundAverageOnePercentEfforts: Number,
    //             roundAverageRunningBounces: Number,
    //             roundAverageGoalAssists: Number,
    //             roundAveragePercentOfGamePlayed: Number,
    }

});

module.exports = mongoose.model('RoundAverage', roundAverageSchema);
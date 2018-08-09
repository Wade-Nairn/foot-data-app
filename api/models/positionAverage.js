const mongoose = require('mongoose');

const positionAverageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    positon: {type: String, required: true},
    positionData: {
    //             positionAverageKicks: Number,
    //             positionAverageMarks: Number,
    //             positionAverageHandballs: Number,
    //             positionAverageDisposals: Number,		
    //             positionAverageGoals: Number,
    //             positionAverageBehinds: Number,
    //             positionAverageHitouts: Number,
    //             positionAverageTackles: Number,
    //             positionAverageRebound50s: Number,
    //             positionAverageInside50s: Number,
    //             positionAverageClearences: Number, 
    //             positionAverageCharges: Number,
    //             positionAverageFreeFor: Number,             
    //             positionAverageFreeAgainst: Number,         
    //             positionAverageBrownlowVotes: Number,
    //             positionAverageContestedPositions: Number,              
    //             positionAverageUncontestedPositions: Number,            
    //             positionAverageContestedMarks: Number,           
    //             positionAverageMarksIn50: Number,           
    //             positionAverageOnePercentEfforts: Number,
    //             positionAverageRunningBounces: Number,
    //             positionAverageGoalAssists: Number,
    //             positionAveragePercentOfGamePlayed: Number
    }

});

module.exports = mongoose.model('PositionAverage', positionAverageSchema);
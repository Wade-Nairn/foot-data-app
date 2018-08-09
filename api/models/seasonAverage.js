const mongoose = require('mongoose');

const seasonAverageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    season: {type: Number, required: true},
    seasonCurrent: {type: Boolean, required: true},
    seasonData: {
    //             seasonAverageKicks: Number,
    //             seasonAverageMarks: Number,
    //             seasonAverageHandballs: Number,
    //             seasonAverageDisposals: Number,		
    //             seasonAverageGoals: Number,
    //             seasonAverageBehinds: Number,
    //             seasonAverageHitouts: Number,
    //             seasonAverageTackles: Number,
    //             seasonAverageRebound50s: Number,
    //             seasonAverageInside50s: Number,
    //             seasonAverageClearences: Number, 
    //             seasonAverageCharges: Number,
    //             seasonAverageFreeFor: Number,             
    //             seasonAverageFreeAgainst: Number,         
    //             seasonAverageBrownlowVotes: Number,
    //             seasonAverageContestedPositions: Number,              
    //             seasonAverageUncontestedPositions: Number,            
    //             seasonAverageContestedMarks: Number,           
    //             seasonAverageMarksIn50: Number,           
    //             seasonAverageOnePercentEfforts: Number,
    //             seasonAverageRunningBounces: Number,
    //             seasonAverageGoalAssists: Number,
    //             seasonAveragePercentOfGamePlayed: Number
    }
    
});

module.exports = mongoose.model('SeasonAverage', seasonAverageSchema);
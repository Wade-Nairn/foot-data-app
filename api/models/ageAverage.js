const mongoose = require('mongoose');

const ageAverageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    age: {type: Number, required: true},
    //             ageAverageKicks: Number,
    //             ageAverageMarks: Number,
    //             ageAverageHandballs: Number,
    //             ageAverageDisposals: Number,		
    //             ageAverageGoals: Number,
    //             ageAverageBehinds: Number,
    //             ageAverageHitouts: Number,
    //             ageAverageTackles: Number,
    //             ageAverageRebound50s: Number,
    //             ageAverageInside50s: Number,
    //             ageAverageClearences: Number, 
    //             ageAverageCharges: Number,
    //             ageAverageFreeFor: Number,             
    //             ageAverageFreeAgainst: Number,         
    //             ageAverageBrownlowVotes: Number,
    //             ageAverageContestedPositions: Number,              
    //             ageAverageUncontestedPositions: Number,            
    //             ageAverageContestedMarks: Number,           
    //             ageAverageMarksIn50: Number,           
    //             ageAverageOnePercentEfforts: Number,
    //             ageAverageRunningBounces: Number,
    //             ageAverageGoalAssists: Number,
    //             ageAveragePercentOfGamePlayed: Number

});

module.exports = mongoose.model('AgeAverage', ageAverageSchema);
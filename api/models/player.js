const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({ // will also need 
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {type: String, required: true},
    surname: {type: String, require: true}
    // displayName: String,
    // dateOfBirth: Date,
    // currentClub: String,
    // height: Number,
    // currentlyActive: Boolean,
    // season: { 
    //     year: Number,
    //     club: String,
    //     seasonData: {
    //         numberGamesThisSeason: Number,
    //         totalKicks: Number,
    //         totalMarks: Number,
    //         totalHandballs: Number,
    //         totalDisposals: Number,		
    //         totalGoals: Number,
    //         totalBehinds: Number,
    //         totalHitouts: Number,
    //         totalTackles: Number,
    //         totalRebound50s: Number,
    //         totalInside50s: Number,
    //         totalClearences: Number, 
    //         totalCharges: Number,
    //         totalFreesFor: Number,            
    //         totalFreesAgainst: Number,         
    //         totalBrownlowVotes: Number,
    //         totalContestedPositions: Number,              
    //         totalUncontestedPositions: Number,            
    //         totalContestedMarks: Number,           
    //         totalMarksIn50: Number,           
    //         totalOnePercentEfforts: Number,
    //         totalRunningBounces: Number,
    //         totalGoalAssists: Number,
    //         averagePercentOfGamePlayed: Number
    //         ageAtStartOfYear: Number
        //     seasonGames: [
        //         {
        //             round: Number,
        //             opponent: String,
        //             result: String,
        //             ground: String,
        //             statePlayed: String,
        //             crowdSize: Number,
        //             crowdGrouping: Number,         
        //             jumperNumber: Number,
        //             mainPosition: String,
        //             secondaryPosition: String,
        //             kicks: Number,
        //             marks: Number,
        //             handballs: Number,
        //             disposals: Number,		
        //             goals: Number,
        //             behinds: Number,
        //             hitouts: Number,
        //             tackles: Number,
        //             rebound50s: Number,
        //             inside50s: Number,
        //             clearences: Number, 
        //             charges: Number,
        //             freeFor: Number,            
        //             freeAgainst: Number,         
        //             brownlowVotes: Number,
        //             contestedPositions: Number,              
        //             uncontestedPositions: Number,            
        //             contestedMarks: Number,           
        //             marksIn50: Number,           
        //             onePercentEfforts: Number,
        //             runningBounces: Number,
        //             goalAssists: Number,
        //             percentOfGamePlayed: Number
        //         } 
        //     ]   
        // },
    // career: {
    //         careerTotalKicks: Number,
    //         careerTotalMarks: Number,
    //         careerTotalHandballs: Number,
    //         careerTotalDisposals: Number,		
    //         careerTotalGoals: Number,
    //         careerTotalBehinds: Number,
    //         careerTotalHitouts: Number,
    //         careerTotalTackles: Number,
    //         careerTotalRebound50s: Number,
    //         careerTotalInside50s: Number,
    //         careerTotalClearences: Number, 
    //         careerTotalCharges: Number,
    //         careerTotalFreesFor: Number,            
    //         careerTotalFreesAgainst: Number,         
    //         careerTotalBrownlowVotes: Number,
    //         careerTotalContestedPositions: Number,              
    //         careerTotalUncontestedPositions: Number,            
    //         careerTotalContestedMarks: Number,           
    //         careerTotalMarksIn50: Number,           
    //         careerTotalOnePercentEfforts: Number,
    //         careerTotalRunningBounces: Number,
    //         careerTotalGoalAssists: Number,
    // },
    // predictions: { PHASE 2
    //     year: Number,
    //     season: [
    //     {
    //          round: Number,
    //          roundPredections: {
    //              score: Number,
    //              price: Number
    //              change: Number,
    //          }        
    //     }     
    //     ]
    //
    //}, 
    //fantasy: { PHASE 2
    //      
    //}
});

module.exports = mongoose.model('Player', playerSchema);
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'heres the list of teams'
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'posted to the list of teams'
    });
});

router.get('/:teamsId', (req, res, next) => {
    res.status(200).json({
        message: 'a single team'
    });
});

router.post('/:teamsId', (req, res, next) => {
    res.status(200).json({
        message: ' posted a single team'
    });
});

module.exports = router;
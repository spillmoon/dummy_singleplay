var express = require('express');
var router = express.Router();
var isSecure = require('./common').isSecure;

// POST, 별점 주기
router.post('/', isSecure, function(req, res, next) {
    var playId = req.body.pid;
    var starScore = req.body.starScore;

    res.send({
        result:
        {
            message: "평가해주셔서 감사합니다."
        }
    });
});

module.exports = router;
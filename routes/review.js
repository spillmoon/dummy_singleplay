var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var pid = req.body.id;
    var starScore = req.body.starScore;

    res.send({
        result:
        {
            message: "별점 주기 성공",
            pid: req.body.id,
            starScore: req.body.starScore
        }
    });
});

module.exports = router;
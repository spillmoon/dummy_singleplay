var express = require('express');
var router = express.Router();
//var Wishlist = require('../models/wishlist');
//var isAuthenticated = require('./common').isAuthenticated;

// 주문 목록 조회, GET /wishlists?start=20
router.get('/', function(req, res, next) {
    var start = parseInt(req.query.start) || 20;

    if (req.url.match(/\/\?start=\d/i)) {
        res.send({
            totalItems: 30,
            itmesPerPage: 10,
            startIndex: 20,
            paging: {
                prev: "http://server:port/wishlists?sort=0&start=10",
                next: "http://server:port/wishlists?sort=0&start=30"
            },
            results: [{
                userRsvNo: 1367,
                playName: "위키드",
                playDate: "2016-08-22",
                playTime: "18:00",
                placeName: "디큐브 아트센터",
                poster: "http://server:port/images/poster/filename.jpg"
            }]
        });
    }
});

// 주문 생성, POST /wishlists
router.post('/', function(req, res, next) {
    var playId  = req.body.playId;
    var rsvSeat = req.body.rsvSeat;

    res.send({
        result : "예약 성공",
    });
});

router.get('/:rid', function(req, res, next) {
    var rsvId = req.params.rid;

    res.send({
        RsvNo: rsvId,
        playName: "위키드",
        playDate: "2016-08-22",
        playTime: "18:00",
        placeName: "디큐브 아트센터",
        poster: "http://server:port/images/poster/filename.jpg",
        rsvDate: "2016-08-22",
        seatInfo: "S-A9",
        price: 10000
    });
});

module.exports = router;
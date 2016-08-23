var express = require('express');
var router = express.Router();
//var Wishlist = require('../models/wishlist');
//var isAuthenticated = require('./common').isAuthenticated;

// /boards?start=10
router.get('/', function(req, res, next) {
    if (req.url.match(/\/\?start=\d/i)) {
        res.send({
            totalItems: 30,
            itmesPerPage: 10,
            startIndex: 10,
            paging: {
                prev: "http://server:port/boards?start=0",
                next: "http://server:port/boards?start=20"
            },
            results: [{
                boardNo: 1,
                category: 0, //(0: 공지, 1: 이벤트)
                title: "업데이트 공지",
                author: "관리자",
                image: "http://server:pot/images/board/filename.jpg"
            }]
        });
    }
});

module.exports = router;
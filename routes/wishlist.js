var express = require('express');
var router = express.Router();
//var Wishlist = require('../models/wishlist');
//var isAuthenticated = require('./common').isAuthenticated;

// GET /wishlists?sort=0&start=20
router.get('/', function(req, res, next) {
    if (req.url.match(/\?sort=\d+&start=\d+/i)) {
        res.send({
            totalItems: 50,
            itmesPerPage: 10,
            startIndex: 20,
            paging: {
                prev: "http://server:port/wishlists?sort=0&start=10",
                next: "http://server:port/wishlists?sort=0&start=30"
            },
            results: [{
                wishlistId: 13,
                playId: 1,
                playName: "위키드",
                thema: "뮤지컬",
                placeName: "디큐브 아트센터",
                playDay: "2016-08-22",
                playTime: "19:00",
                price: 80000,
                salePrice: 68000,
                starScore: 5,
                //poster: "http://server:port/images/poster/filename.jpg”
            }]
        });
    }
    else {
        res.send({mess:"hahahahah"});
    }
});

// 주문 생성, POST /wishlists
router.post('/', function(req, res, next) {
    res.send({
        messege: "success",
        results: {
            thumbs: [
                "http://server:port/images/thumbnails/thumbfile1.jpg",
                "http://server:port/images/thumbnails/thumbfile2.jpg",
                "http://server:port/images/thumbnails/thumbfile3.jpg"]
        }
    });
});

router.delete('/:id', function(req, res, next) {
    var wishlistId = req.params.id;

    res.send({
        message: "위시리스트 ID : " + wishlistId,
        result : "위시리스트 삭제 성공"
    });
});

module.exports = router;
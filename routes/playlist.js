var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.action == 0) {
        res.send({
            totalItems: 140,
            itemsPerPage: 10,
            startIndex: 20,
            paging: {
                prev: "http://server:port/playlists/?theme=0&sort=0&start=10",
                next: "http://server:port/playlists/?theme=0&sort=0&start=30"
            },
            results: [
                {
                    playId: 1,
                    playName: "위키드",
                    theme: "뮤지컬",
                    placeName: "디큐브 아트센터",
                    playDay: "2016-08-22",
                    playTime: "19:00",
                    price: 80000,
                    salePrice: 68000,
                    starScore: 5,
                    poster: "http://server:port/images/poster/filename.jpg"
                }, {}, {}
            ]
        });
    }
    else if (req.query.action == 1) {
        res.send({
            totalItems: 40,
            itemsPerPage: 10,
            startIndex: 20,
            paging: {
                prev: "http://server:port/playlists/?location=서울시 서초구&start=10",
                next: "http://server:port/playlists/?location=서울시 서초구&start=30"
            },
            results: [
                {
                    playId: 1,
                    playName: "위키드",
                    theme: "뮤지컬",
                    placeName: "디큐브 아트센터",
                    playDay: "2016-08-22",
                    playTime: "19:00",
                    price: 80000,
                    salePrice: 68000,
                    starScore: 5,
                    poster: "http://server:port/images/poster/filename.jpg"
                }, {}, {}
            ]
        });
    }
    else if (req.query.action == 2) {
        res.send({
            totalItems: 40,
            itemsPerPage: 10,
            startIndex: 20,
            paging: {
                prev: "http://server:port/playlists/?keyword=위키드&start=10",
                next: "http://server:port/playlists/?keyword=위키드&start=30"
            },
            results: [
                {
                    playId: 1,
                    playName: "위키드",
                    theme: "뮤지컬",
                    placeName: "디큐브 아트센터",
                    playDay: "2016-08-22",
                    playTime: "19:00",
                    price: 80000,
                    salePrice: 68000,
                    starScore: 5,
                    poster: "http://server:port/images/poster/filename.jpg"
                }, {}, {}
            ]
        });
    }
});

module.exports = router;
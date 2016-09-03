var path = require('path');
var url = require('url');
var async = require('async');
var dbPool = require('../models/common').dbPool;
// 같은 날 다른 시간 공연들 하나로 표시, 시간은 여러개 저장할 수 있도록 하기
// fixme: 쿼리 리팩토링
// 당일 전체 공연 목록
function allList(sort, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}

function musicalList(sort, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}
// fixme: 쿼리 리팩토링
// 오페라 목록(정렬 방식에 따른 목록 정렬)
function operaList(sort, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}
// fixme: 쿼리 리팩토링
// 콘서트 목록(정렬 방식에 따른 목록 정렬)
function concertList(sort, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}

// 검색한 구의 공연장에서 하는 공연 목록
function searchLocation(location, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}

// 검색한 키워드와 관련된 공연 목록
function searchKeyword(keyword, callback) {
    var playlist = [];
    playlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    playlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:80/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, playlist);
}

function findPlay(pid, callback) {
    var play = {};

    play.playId = 1;
    play.isWish = 1;
    play.playName = "잭더리퍼";
    play.theme = "뮤지컬";
    play.placeName = "디큐브 아트센터";
    play.playDay = "2016-09-09";
    play.playTime = "20:00";
    play.VIPprice = 150000;
    play.saleVIPprice = 75000;
    play.Rprice = 90000;
    play.saleRprice = 45000;
    play.Sprice = 70000;
    play.saleSprice = 35000;
    play.starScore = 8.5;
    play.userCount = 312;
    play.poster = "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg";
    play.cast = ["http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/castimg/play1_cast1.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/castimg/play1_cast2.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/castimg/play1_cast3.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/castimg/play1_cast4.jpg"];
    play.usableSeat = [ 1, 1, 3 ];
    callback(null, play);
}

module.exports.allList = allList;
module.exports.musicalList = musicalList;
module.exports.operaList = operaList;
module.exports.concertList = concertList;
module.exports.searchLocation = searchLocation;
module.exports.searchKeyword = searchKeyword;
module.exports.findPlay = findPlay;

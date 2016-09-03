// 필요한 모듈 로딩
var dbPool = require('../models/common').dbPool;
var path = require('path');
var url = require('url');
var fs = require('fs');
var async = require('async');

// 위시리스트 목록 조회
function listWish(callback) {
    var wishlist = [];
    wishlist.push({
        playId: 1,
        playName: "잭더리퍼",
        placeName: "디큐브 아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.5,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:8080/posterimg/', path.basename(results[i].imageName))
    });
    wishlist.push({
        playId: 2,
        playName: "키다리 아저씨",
        placeName: "충무아트센터",
        playDay: "2016-09-09",
        playTime: "20:00",
        price: 100000,
        salePrice: 50000,
        starScore: 8.7,
        poster: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"
        // poster: url.resolve('http://127.0.0.1:8080/posterimg/', path.basename(results[i].imageName))
    });
    callback(null, wishlist);
}

// 위시리스트 추가
function createWish(userId, playId, callback) {
    var thumbnail = ["http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg",
        "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg"]; // 쿼리문의 결과가 담길 배열 객체 생성

    callback(null, thumbnail); // router의 createWish 함수에 null->err, thumbnail 배열 객체->results를 념겨준다.
}

function deleteWish(wishId, callback) {
    callback(null); // router의 deleteWish 함수에 null->err로 넘겨준다.(결과 출력X)
}

// 함수들 exports 모듈 객체로 노출
module.exports.listWish = listWish;
module.exports.createWish = createWish;
module.exports.deleteWish = deleteWish;

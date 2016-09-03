// 필요한 모듈 로딩
var dbPool = require('../models/common').dbPool;
var path = require('path');
var url = require('url');
var fs = require('fs');

// 예약 내역 조회
function listRsv(callback) {
    var rsvlist = [];
    rsvlist.push({
        rsvId: 1,
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
    rsvlist.push({
        rsvId: 2,
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
    callback(null, rsvlist);
}

// 예약 내역 추가
function createRsv(userId, playId, playName, usableSeatNo, seatClass, callback) {
    callback(null); // router에 null->err만 넘겨준다. 결과값 출력X
}

// 예약 내역들 중 하나의 예약 내역 상세보기
function findRsv(rsvId, callback) {
    var rsv = {};

    rsv.rsvId = 1;
    rsv.reservationNo = "2016-0903-112";
    rsv.playName = "잭더리퍼";
    rsv.placeName = "디큐브 아트센터";
    rsv.playDay = "2016-09-09";
    rsv.playTime = "20:00";
    rsv.seatClass = "VIP";
    rsv.seatInfo = "2F-F09";
    rsv.settlement = 59400;
    rsv.poster = "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/posterimg/play1_poster.jpg";

    callback(null, rsv);
}

function deleteRsv(rsvId, callback) {
    callback(null);
}

// 함수를 exports 객체로 노출시켜 router에서 사용 가능하게 한다.
module.exports.createRsv = createRsv;
module.exports.listRsv = listRsv;
module.exports.findRsv = findRsv;
module.exports.deleteRsv = deleteRsv;
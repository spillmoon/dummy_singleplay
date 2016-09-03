// 필요한 모듈 로딩
var mysql = require('mysql');
var dbPool = require('../models/common').dbPool;

// 리뷰 생성
function createReview(userId, playId, playName, starScore, callback) {
    callback(null); // router에 null->err를 넘겨준다.
}

// 함수를 exports 객체로 노출
module.exports.createReview = createReview;
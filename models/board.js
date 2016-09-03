// 필요한 모듈 로딩
var mysql = require('mysql');
var dbPool = require('../models/common').dbPool;
var path = require('path');
var url = require('url');
var fs = require('fs');

// 공지사항, 이벤트 목록 조회
function listBoards(callback) {
    var board = [];
    board.push({
        boardNo: 1,
        image: "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/boardimg/board1.jpg"
    });
    callback(null, board);
}

// 공지사항 이벤트 목록들 중 하나의 게시글 상세보기
function findBoard(boardNo, callback) {
    var board = "http://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com:80/boardimg/board1.jpg"; // 하나의 결과 담긴 result 배열 객체의 index 0
    // var board = url.resolve('http://127.0.0.1:80/boardimg/', path.basename(result[0].filePath));
    callback(null, board); // router에 err->null, result->board 객체를 넘겨준다.
}

// 함수를 exports 객체로 노출시켜 router에서 사용 가능하게 한다.
module.exports.findBoard = findBoard;
module.exports.listBoards = listBoards;
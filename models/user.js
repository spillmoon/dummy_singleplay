var dbPool = require('../models/common').dbPool;

var staticUser = {};
staticUser.name = "한세정";
staticUser.id = 1;
staticUser.email = "test@naver.com";
staticUser.password = "123";

function findByEmail(email, callback) {
    var sql = 'SELECT id, userEmail, password FROM user WHERE userEmail = ?';
    dbPool.getConnection(function(err, dbConn) {
        if (err) {
            return callback(err);
        }
        dbConn.query(sql, [email], function(err, results) {
            dbConn.release();
            if (err) {
                return callback(err);
            }
            if (results.length === 0) {
                return callback(null, null);
            }
            callback(null, results[0]);
        })
    });
}

function verifyPassword(password, hashPassword, callback) {
    var sql = 'SELECT SHA2(?, 256) password';
    dbPool.getConnection(function(err, dbConn){
        if (err) {
            return callback(err);
        }
        dbConn.query(sql, [password], function(err, results) {
            dbConn.release();
            if (err) {
                return callback(err);
            }
            if (results[0].password !== hashPassword) {
                return callback(null, false)
            }
            callback(null, true);
        });
    });
}
// deserializeUser에서 사용, id를 가지고 user를 복원
function findUser(userId, callback) {
    var sql = 'SELECT id, userEmail FROM user WHERE id = ?';
    dbPool.getConnection(function(err, dbConn) {
        if (err) {
            return callback(err);
        }
        dbConn.query(sql, [userId], function(err, results) {
            dbConn.release();
            if (err) {
                return callback(err);
            }
            var user = {};
            user.id = results[0].id;
            user.email = results[0].email;
            callback(null, user);
        });
    });
}
// 페이스북 로그인시 회원 테이블에서 아이디를 찾고 없으면 추가, 있으면 기존 id 사용
function findOrCreate(profile, callback) {
    var sql_findUser = "select id, userEmail, facebookId from user where facebookId = ?";
    var sql_createUser = "insert into user(userEmail, facebookId) values (?, ?)";

    dbPool.getConnection(function(err, dbConn) {
        if (err) {
            return callback(err);
        }
        dbConn.query(sql_findUser, [profile.id], function(err, results) {
            if (err) {
                return callback(err);
            }
            if (results.length !== 0) {
                dbConn.release();
                var user = {};
                user.id = results[0].id;
                user.email = results[0].userEmail;
                user.facebookId = results[0].facebookId;
                return callback(null, user);
            }
            dbConn.query(sql_createUser, [profile.emails[0].value, profile.id], function(err, result) {
                dbConn.release();
                if (err) {
                    return callback(err);
                }
                var user = {};
                user.id = result.insertId;
                user.email = profile.emails[0].value;
                user.facebookId = profile.id;
                callback(null, user);
            });
        });
    });
}
// 쿠폰함 조회 구현하기
function couponList(uid, callback) {
    var coupons = [];
    coupons.push({
        couponNo: 1,
        couponName: "추석 맞이 10% 할인 쿠폰",
        saveOff: 10,
        periodStart: "2016-09-01",
        periodEnd: "2016-09-20"
    });
    callback(null, coupons);
}

module.exports.findByEmail = findByEmail;
module.exports.verifyPassword = verifyPassword;
module.exports.findUser = findUser;
module.exports.findOrCreate = findOrCreate;
module.exports.couponList = couponList;
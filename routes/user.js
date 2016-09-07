var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var path = require('path');
var url = require('url');
var isSecure = require('./common').isSecure;
var isAuthenticated = require('./common').isAuthenticated;
var User = require('../models/user');

// todo: PUT, 프로필, PUSH 수정 구현 에정
router.put('/me', isSecure,/* isAuthenticated,*/ function(req, res, next) {
    var action = req.query.action;
    if (action == "push") {
        var pushInfo = {};
        pushInfo.days = [];
        pushInfo.theme = [];
        for(var i = 0; i < req.body.day.length; i++){
            pushInfo.days.push({
                day: req.body.day[i]
            });
        }
        for(var i = 0; i < req.body.theme.length; i++){
            pushInfo.theme.push({
                theme: req.body.theme[i]
            });
        }
        res.send({
            code: 1,
            message: "알림 변경 성공"
        });
    } else if (action == "profile") {
        var userInfo = {};
        userInfo.userName = req.body.userName;
        userInfo.userEmail = req.body.userEmail;
        userInfo.userPhone = req.body.userPhone;
        res.send({
            code: 1,
            result: {
                userName: userInfo.userName,
                userEmail: userInfo.userEmail,
                userPhone: userInfo.userPhone
            }
        });
    }
});

router.get('/me', isSecure,/* isAuthenticated, */function(req, res, next) {
    res.send({
        code: 1,
        result: {
            name: "문승필",
            email: "spillmoon@naver.com",
            phone: "010-2503-4236"
        }
    });
});

// 쿠폰 목록 조회, https, 로그인 해야 사용 가능
router.get('/me/coupons', isSecure,/* isAuthenticated,*/ function(req, res, next) {
    User.couponList(1/*req.user.id*/, function(err, coupons) { // 매개변수로 세션을 통해 request객체에 붙은 user의 id 사용
        if (err) {
            return next(err);
        }
        res.send({
            code: 1,
            results: coupons
        });
    });
});

router.get('/me/discounts', isSecure, /*isAuthenticated,*/ function(req, res, next) {

        res.send({
            code: 1,
            results: {
                mileage: 1400,
                coupons: [{couponNo: 1, couponName: "추석할인 1", saveOff: 30}, {couponNo: 3, couponName: "추석할인 2", saveOff: 10}]
            }
        });

});

module.exports = router;
function seatInfo(playId, callback) {
    var info = {};
    info.theme = "뮤지컬";
    info.playName = "잭더리퍼";
    info.playDay = "2016-09-10";
    info.playTime = "15:00";
    info.placeImage = "https://ec2-52-78-118-8.ap-northeast-2.compute.amazonaws.com=4433/placeimg/play1_201609101500.png";
    info.placeAddress = "서울시 종로구";
    info.placeName = "디큐브 아트센터";
    info.seatInfo = [];
    info.seatInfo.push(
        {usableSeatNo: 3, seatClass: "VIP", seatInfo: "1F-A01", price: 58500},
        {usableSeatNo: 8, seatClass: "R", seatInfo: "1F-D42", price: 49500},
        {usableSeatNo: 15, seatClass: "S", seatInfo: "1F-E19", price: 36000}
    );
    callback(null, info);
}

module.exports.seatInfo = seatInfo;
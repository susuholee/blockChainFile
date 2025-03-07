// 비즈니스 로직을 작성
// 유저의 회원가입과 로그인의 로직을 작성


// 사용자 기능 호출 -> Controller -> Model

const User = require('../models/user');

const signup = (req, res) => {
    // 미들웨어로 body
    const {username, uid, upw} = req.body;
    // 요청 객체 응답 객체를 받아서 처리하는 로직
    // 조건문 처리 로직
    // 유저가 회원가을 할수 있는지 체크
    // 예 ) 아이디가 동일한 유저는 있을수 없으니?
    // 비즈니스 로직에서 처리를 해서 
    // 입력한값이 정해진 정규식에 맞게 작성된 내용인치 한번더 체크
    const [isSign] = User.selectUserId(uid); // 중복이 안되면 값이 없으니 
    // { uid: '123', upw: '456' }
    console.log(isSign); // ture false
    if(!isSign) {
        User.signupUser(username,uid, upw);
        res.redirect('/user/login'); // 회원가입이 완료되면 로그인 페이지로
    } else {
        res.send("아이디가 중복됩니다.");
    }
}

const login = (req, res) => {
    // console.log(req.body)
    const {username, uid, upw} = req.body;
    // []
    const [isLogin] = User.selectUser(username, uid, upw); // [], [{uid : "soon", upw : "123"}]
    // undefined
    // {uid : "soon", upw : "123"}
    // uid랑 upw
    if(isLogin) {
        res.send('로그인 성공')
    } else {
        res.send("아이디 비밀번호 확인하세요")
    }
}

module.exports = { signup, login };
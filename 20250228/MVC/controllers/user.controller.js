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
    const {uid, upw} = req.body;
    // []
    const [isLogin] = User.selectUser(uid, upw); // [], [{uid : "soon", upw : "123"}]
    // undefined
    // {uid : "soon", upw : "123"}
    // uid랑 upw
    if(isLogin) {
        // 쿼리스트링으로 uid와 username을 보낸ㄴ다다
        res.redirect(`/user/detail?uid=${isLogin.uid}&username=${isLogin.username}`);
    } else {
        res.send("아이디 비밀번호 확인하세요")
    }

}

// 회원 정보 수정 로직
const updateUser = (req, res) => {
    const {uid, newUsername , newUpw} = req.body;
    const [user]  = User.selectUserId(uid);
    
    // 조건문으로 user면 수정 아니면 "사용자를 찾을 수 없음" 요청 메세지를 보낸다.
    if (user) {
        user.username = newUsername;
        user.upw = newUpw;
        res.redirect('/user/login');
        console.log(user);
    } else {
        res.send('사용자를 찾을 수 없습니다!!');
    }
}


// 회원 정보 삭제 로직
const deleteUser = (req, res) => {
    const { uid } = req.body;
    const [user] = User.selectUserId(uid);

    if (user) {
        User.deleteUserId(uid);
        // 재요청으로 login 페이지로 보냄
        res.redirect('/user/login');
    } else {
        res.send('사용자를 찾을 수 없습니다!!');
    }
};

module.exports = { signup, login, updateUser, deleteUser};
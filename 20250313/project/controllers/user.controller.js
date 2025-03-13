const {userNickSelectAll, userSelectUid, crateUser} = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userNickAll = async () => {
    try {
        // 유저의 닉네임을 전체 조회할때 해당 기능 추가내용은 여기
        return await userNickSelectAll();
    } catch (error) {
        return error;
    }
}

const login = async (uid, upw) => {
    try {
        const data = await userSelectUid(uid);

        if(!data) return {state : 401, message : "아이디가 없습니다."}
        const isPasswordCheck =  bcrypt.compareSync(upw, data.upw);

        if(!isPasswordCheck) return {state : 402, message : "비밀번호가 틀렸습니다"};
        const {nick, imgpath} = data;

        const jwtToken = jwt.sign({nick, imgpath}, process.env.TOKEN_KEY, {expiresIn : "10m"});
        return {state : 200, message : "로그인 성공", user : { token : jwtToken }};
    } catch (error) {
        return error;
    }
}   

const signup = async (uid, upw, name, nick, imgpath) => {
    try {
        const isSignup = await userSelectUid(uid);
        if(isSignup) return {state : 400, message : "중복된 아이디 입니다."}
        const pwHash = bcrypt.hashSync(upw, 10);
        const data = await crateUser(uid, pwHash, name, nick, imgpath);
        return data
    } catch (error) {
        return error;
    }
}

const loginToken = (req, res, next) => {
   const data = req.headers.cookie.split("=")[1];
   const userData = jwt.verify(data, process.env.TOKEN_KEY);
   req.user = userData;
   next();
}

// signup("soon", "1234", "이순현", "soon", "/img");
// login('soon', '1234');

// TDD 백엔드 작성할때 테스트코드를 작성하고 개발
// 

module.exports = {userNickAll, login, signup, loginToken};
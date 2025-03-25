const { User } = require("../models/config"); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userController = {
    async signup(uid,upw,name){
        try {
            if((uid.trim() !== "") &&  (upw.trim() !== "") && (name.trim() !== "")){
                // 비밀키를 추가해서 비밀번호를 해시 암호화
                const upwHash = bcrypt.hashSync(upw, 10);

                await User.create({uid, upw : upwHash, name});
                return {state : 200, message : "회원가입 성공"}
            }
            return {state : 401, message : "빈값 없이 작성하세요"}
        } catch (error) {
            return {state : 400, message : error}
        }
    },

    async login(uid, upw){
        // 로그인쪽도 빈값 체크크
        try {
            const data = await User.findOne({where : { uid }}) // JWT에 담을 유저 정보는 아이디, 이름, 계정의 권한
            // {계정의 권한 : 1, 아이디 : suho, 이름 : "수호"} JWT 보안 안정성 쿠키로 로그인 유지
            // 객체에 ? 옵션 체이닝 : 키값이 있으면 호출, 없으면 접근 안한다.
            if(!data) return {state : 401, message : "일치하는 유저가 없습니다"}
            const userCompare = bcrypt.compareSync(upw, data.dataValues.upw);
            console.log("검증결과 ",userCompare)
            if(data && userCompare) {
                const {dataValues : {uid, name, grade}} = data;
                const token = jwt.sign({uid,name,grade}, process.env.SECRET_KEY, {expiresIn : "10m"})
                return {state : 200, message : "로그인 성공", token}
            } else {
                return {state : 402, message : "비밀번호가 일치하지 않습니다."}
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController;
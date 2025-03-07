const { userSelectAll, userFindUid, userCreate } = require("../models/user");

// signup 요청이 발생했을 때 
exports.signup = async (req) => {
    const {uid, upw} = req.body;
    
    // 유저가 있는지 확인
    const isSignup = await userFindUid({uid});
    if(isSignup) {
        return {state : 201, message : "중복된 회원가입 입니다."}
    } else {
        // 가입이 성공하면 DB에 저장
        userCreate({uid, upw});
        return {state : 200, message : "가입 성공!!!"}
    }
}
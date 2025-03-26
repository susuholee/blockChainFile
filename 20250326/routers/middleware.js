const jwt = require('jsonwebtoken');

/// 로그인 검증 미들웨어
// 검증에 사용될 미들웨어
// authMiddleware 키를 내보낸다.
// 로그인이 안되어 있으면 페이지를 막는다.
// 일반 유저 검증 미들웨어
exports.authMiddleware = (req, res, next) => {
    try {
        // 쿠키값은 req.headers.cookie 안에 들어있다.
        console.log(req.headers.cookie)
        if(req.headers.cookie){
            const user = req.headers.cookie.split("=")[1];
            const decoded = jwt.verify(user, process.env.SECRET_KEY)
            // console.log("복호화 된거야!",decoded)
            if(decoded) {
                req.user = decoded;
                next();
            } else {
                req.redirect('/user/login')
            }
        } else {
            res.redirect('/user/login')
        }
    } catch (error) {
        res.redirect('/user/login');
    }
}

// 관리자 유저 검증 미들웨어
// post 요청을 보냈을 때 검증할 미들웨어
exports.adminMiddleware = (req, res, next) =>{
    try {
        if(req.headers.cookie){
            const user = req.headers.cookie.split("=")[1];
            const decoded = jwt.verify(user, process.env.SECRET_KEY)
            console.log("복호화 된거야!",decoded)
            if(decoded.grade === 2) {
                req.user = decoded;
                req.admin = true;
                next();
            } else {
                req.admin = false;
                next();
            }
        } else {
            res.json({state : 401, message : "카테고리 진입했고 로그인 검증 안됨"})
        }
    } catch (error) {
        res.json({state : 400, message : "관리자 계정 검증 실패!"})
    }
}
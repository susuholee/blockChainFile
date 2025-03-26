const router = require('express').Router();
const userController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');

router.get('/login', (req, res) => {
    res.render('userPage/login');
})

router.get('/signup', (req, res) => {
    res.render('userPage/signup');
})
//////////// 프론트 렌더링

// 로그인한 유저의 데이터가 있는지
router.get('/userVerify', (req, res) => {
    if(req.headers.cookie)
    {
        const user = req.headers.cookie.split("=")[1];
        const decoded = jwt.verify(user, process.env.SECRET_KEY)
        if(decoded) {
            res.json({state : 200, data : {user : decoded}});
        } else {
            res.json({state : 400, message : "유저 검증 실패!"})
        }
    } else {
            res.json({state : 401, message : "토큰이 없습니다."})
    }
})


router.post('/signup', async (req, res) => {
    const {uidValue, upwValue, unameValue} = req.body;
    console.log({uidValue, upwValue, unameValue});
    const data = await userController.signup(uidValue, upwValue, unameValue);
    res.json(data);
})

router.post('/login', async (req, res) => {
    try {
        const {uidValue, upwValue} = req.body;
        const {token,  state, message } = await userController.login(uidValue,upwValue);
        if(state === 402) return res.json({message, state})
        if(!token) return  res.json({state : 400, message : "일치하는 유저가 없습니다."})
        res.cookie("user_token", token, {
            maxAge : 10 * 60 * 60 * 1000,
            httpOnly : true
        })
        res.json({state, message}); 
    } catch (error) {
        res.json(error);
    }
})

router.get('/logout', (req, res) => {
    // clearCookie() : 전달한 토큰의 이름을 지속시간을 과거시간으로 만든다.
    res.clearCookie("user_token") // 토큰 이름을 헤더에 담는다.
    res.redirect('/')
})


module.exports = router;


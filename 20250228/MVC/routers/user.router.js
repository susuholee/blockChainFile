const router = require('express').Router();
const { signup, login } = require('../controllers/user.controller'); // {signup}
// 요청 경로는 /user 

// GET /login http/1.1
// 로그인 페이지
router.get('/login' , (req, res) => {
    // 여기까지
    res.render('user/index')
})

//user/signup
router.get('/signup', (req, res) => {
    res.render('user/signup')
})

// POST /login http/1.1
// page 보여주는 역활이 아님 로직부분만 재요청 응답처리
// 로그인 로직 작성
router.post('/loginPost', (req, res) => {
    login(req);
    res.redirect("/login");
    // /login === 화면을 그리는게 맞고 get
    // post /loginPost === login 화면이 보인다,
})

// 회원가입 로직 작성
//user/signup
router.post('/signup',(req, res) => {
    signup(req, res);
})

module.exports = router;
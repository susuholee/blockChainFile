const router = require('express').Router();
const { signup, login, updateUser, deleteUser } = require('../controllers/user.controller'); // {signup}
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

router.get('/detail', (req, res) => {
    const { username, uid}  = req.query;
    console.log("출력된 요청쿼리:", username,uid);
    const user = {username, uid};
    res.render('user/detail', {user});
    // 응답하면서 detail.ejs 파일을 보여주고, user 객체를 전달
});

router.get('/update', (req, res) => {
    console.log("출력된 데이터", req.query);
    const {uid, username}  = req.query;
    const user = {uid, username};
    res.render('user/profile', {user});
})

// POST /login http/1.1
// page 보여주는 역활이 아님 로직부분만 재요청 응답처리
// 로그인 로직 작성
router.post('/login', (req, res) => {
    login(req, res);
  
    // /login === 화면을 그리는게 맞고 get
    // post /loginPost === login 화면이 보인다,
})

// 회원가입 로직 작성
//user/signup
router.post('/signup',(req, res) => {
    signup(req, res);
})

// 회원정보 수정 로직 작성
router.post('/update', (req, res) => {
    updateUser(req, res);
})

router.post('/delete', (req, res) => {
    deleteUser(req, res);
})


// 회원 수정 
module.exports = router;
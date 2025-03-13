const router = require('express').Router();
const { upload } = require('../lib/imgUpload');
const {userNickAll, login, signup, loginToken} = require('../controllers/user.controller');

router.get('/', (req ,res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/mypage', loginToken, (req, res) => {
    const {nick, imgpath} = req.user;
    res.render('mypage', {nick, imgpath});
})

/////////////// backend server
/// 단순한 데이터를 요청하는 API 화면을 보여주는 목적이 아니다.

router.post('/signup', upload.single('image'), async (req, res) => {
    const {uid, upw, name, nick} = req.body;
    const {path} = req.file;
    const data = await signup(uid,upw,name,nick,"/" + path);
    res.json(data);
})

router.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    const data = await login(uid, upw);
    if(data.state === 200) {
        const { token } = data.user;
        res.cookie("login-token" , token, {
            maxAge : 10 * 60 * 60 * 1000,
            httpOnly : true       
        })
        res.json({ state : 200, message : data.message});
    }else {
        res.json({state : data.state, message : data.message});
    }
})

module.exports = router;
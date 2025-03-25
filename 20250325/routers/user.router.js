const router = require('express').Router();
const userController = require('../controllers/user.controller')

router.get('/login', (req, res) => {
    res.render('userPage/login');
})

router.get('/signup', (req, res) => {
    res.render('userPage/signup');
})
//////////// 프론트 렌더링

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

module.exports = router;


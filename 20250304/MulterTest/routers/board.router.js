// express 내부에서 제공하는 Router 라이브러리 사용
const router = require('express').Router();

// get 요청으로 루트 경로 들어오면 main 페이지를 응답한다.
router.get('/', (req, res) => {
    res.render('main');
})

router.get('/coffee', (req, res) => {
    console.log("나야 요청 쿼리",req.query);
    res.render('coffee');
})

router.get('/detail', (req, res) => {
    res.render('detail');
})



router.post('/coffee', (req, res) => {
    res.send("POST 방식 요청 메세지!!")
})

module.exports = router;
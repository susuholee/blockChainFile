// express 내부에서 제공하는 Router 라이브러리 사용
const router = require('express').Router();

const {upoladimage} = require('../lib/imageUpload')
const {CoffeBoard, selectBoardAll, selectBoardIndex} = require('../Controller/board.controller')
// get 요청으로 루트 경로 들어오면 main 페이지를 응답한다.
router.get('/', (req, res) => {
    res.render('coffee');
})

router.get('/main', (req, res) => {
    const coffee = selectBoardAll()
    console.log("전달할 coffee 배열:", coffee); 
    res.render("main", { coffee });
})

router.get('/detail', async (req, res) => {
    const {index} = req.query;
    const coffee = await selectBoardIndex(index);
    res.render('detail', {coffee});
})

router.get('/update', async (req, res) => {
    const { index } = req.query;
    console.log("너야?", index)
    const coffee = await selectBoardIndex(index);
    res.render('update', {coffee});
})



router.post('/coffee', upoladimage.single("image"), (req, res) => {
    CoffeBoard(req)
    // console.log("전체 요청 바디:", req.body);
    res.redirect('/main')
})

module.exports = router;
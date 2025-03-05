// 게시판 사용할 router 파일
const router = require('express').Router();
const { upload } = require('../lib/image.upload');
const {createBoard, selectBoardAll, selectBoardIndex} = require('../controllers/board.controller');

router.get('/', (req, res) =>{
    res.render('board');
})

router.get('/main', (req, res) => {
    const board = selectBoardAll();
    res.render('board_main', {board})
})

router.get('/detail', (req, res) => {
    const board = selectBoardIndex(req.query.index);
    // req.query.index
    console.log(req.query);
    console.log(board)
    // 보여줄 글의 내용
    res.render('board_detail', {board})
})

// 기능 로직
router.post('/upload', upload.single("myimage"), (req, res) => {
    // console.log(req.file)
    // 데이터를 저장
    createBoard(req)
    res.redirect('/main');
})

module.exports  = router;
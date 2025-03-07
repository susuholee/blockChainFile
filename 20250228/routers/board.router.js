const router = require('express').Router();

// 게시글 담는 배열
let post = [];

router.get('/', (req, res) => {
    console.log(post);
    res.render('main', { title : "메인",  board: post});
})

router.get('/board', (req, res) => {
    console.log(post);
    res.render('board', { title : "추가",  board: post});
})


// /board/create 요청을 하면
router.post('/create', (req, res) => {
    const title = req.body.title;
    console.log("현재 제목", title);
    post.push({title : title});
    res.redirect('/');
})

module.exports = router;
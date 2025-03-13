const { create, getBoardIndex, getBoard, BoardUpdate, BoardDelete} = require('../controllers/board.controller');
const { createBoardData, updateData } = require('../models/board');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main');
})

router.get('/create', (req, res) => {
    res.render('create');
})
router.get('/view', async (req, res) => {
    const data = await getBoard();
    console.log(data);
    res.render('view', { data });
})

router.get('/detail', async (req, res) =>{
    console.log("현재 인덱스야", req.query);
    const { index } = req.query;
    console.log("게시글 인덱스야!!",  index);

    try {
        // Controller에서 특정 게시글을 반환받는 함수를 가져온다
        const data = await getBoardIndex(index);
        // 데이터가 있으면 detail.ejs 를 렌더링하고 객체형태로 데이터를 보냐주고
        if(data) {
            res.render('detail', {data});
        } else {
            res.send("데이터를 찾을수 없어!!");
        }
    } catch (error) {
        res.send("서버오류");
    }

})

router.get('/update', async (req, res) =>{
    console.log(req.query);
    const { index } = req.query;
    console.log("현재 인덱스야", index);
    const data = await getBoardIndex(index);    
    console.log("들어있는 데이터", data)
    res.render("update", {data});
})


router.get('/error', (req, res) => {
    res.render('error');
})

router.post('/create' , async (req, res) => {
    try {
        // 여기서 post로 요청한 value를 받는다 
        const {titleValue, contentValue } = req.body;
        console.log("나야 요청 바디", req.body);
        await create(titleValue, contentValue);
        res.json({state : 200, message : "글 작성 완료"});        
    } catch (error) {
        res.json({state : 400, message : error}); 
    }
    // 서버가 종료되지 않고 모니터링을 통해서 운영 배포 수정    
})

router.put('/update', async (req, res) => {
    const boardIndex = req.query.index;  // URL에서 전달된 index 값을 받기
    console.log("요청된 boardIndex야", boardIndex);  // boardIndex 값 확인

    const { title, content } = req.body;  // body에서 title, content 받기

    try {
        await BoardUpdate(boardIndex, title, content);
        res.status(200).send('게시글 수정 완료');
    } catch (error) {
        res.status(500).send('게시글 수정 실패');
    }
});
// delete 요청으로 게시글이 삭제되면 재요청을 보내서 view 페이지로
// DELETE 요청 처리
router.delete('/delete', async (req, res) => {
    const boardIndex = req.query.index;
    console.log("삭제할 게시글의 index:", boardIndex);
    // 데이터베이스에서 해당 게시글 삭제
    await BoardDelete(boardIndex);

});

module.exports = router;
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
})

router.put('/update', async (req, res) => {
    const  { title, content } = req.body;
    const  { index } = req.query;
    console.log(req.query);
    console.log("수정할 게시글 index:", index);
    console.log("수정할 제목:", title);
    console.log("수정할 내용:", content);

    try {
        // boardIndex를 이용해 해당 데이터를 가져옴
        const boardData = await getBoardIndex(index);  // 해당 게시글을 찾아온다.

        // 만약 board 데이터가 없으면 오류 반환
        if (!boardData) { 
            return res.send("게시글을 찾을 수 없습니다.");
        }

        // 게시글 수정 처리
        await BoardUpdate(index, title, content);

        res.json({ state : 200, message : "게시글 수정 완료했어요~~"});
    } catch (error) {
        console.log("게시글 수정 중 오류 발생:", error);
        res.json({ state: 400, message: "게시글 수정 중 오류가 발생했습니다." });
    }
});

// delete 요청으로 게시글이 삭제되면 재요청을 보내서 view 페이지로
// DELETE 요청 처리
router.delete('/delete', async (req, res) => {
    const { index } = req.query; // 삭제할 게시글의 index
    console.log("삭제할 게시글의 id:", index);

    try {
        // 게시글 삭제 처리
        const boardData = await BoardDelete(index);
        // 삭제 성공 시 응답
        res.json({ state: 200, message: "게시글 삭제 완료" });
    } catch (error) {
        console.log("게시글 삭제 중 오류 발생:", error);
        res.json({ state: 404, message: "게시글 삭제 중 오류가 발생했습니다." });
    }
});
module.exports = router;
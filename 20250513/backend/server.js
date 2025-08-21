const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors({origin : '*'}))
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// 임시 데이터 
let count = 0;

const list = [
    { id : 1},
    { id : 2},
    { id : 3},
    { id : 4},
    { id : 5},
    { id : 6},
    { id : 7},
    { id : 8},
]

// get 요청
app.get('/getCount', (req, res) => {
    setTimeout(() => {
        res.json({count})
    }, 1000)
})

app.post('/setCount', (req, res) => {
    const {increamentCount} = req.body;
    count += increamentCount; 
    res.json({message : "카운트 증가 완료"})
})

app.get('/getList/:index', (req, res) => {
    const { index } = req.params;
    // 몇개씩 보여줄건지
    const listViewCount = 2;

    // 페이지의 해당하는 번호의 아이템 시작점 계산
    const startIndex = parseInt(index - 1) * listViewCount;
    
    // 페이지의 해당하는 아이템들을 잘라서 반환
    const pageList = list.slice(startIndex, startIndex + listViewCount);

    res.json( { pageList });
})

app.get("/pokemon", async (req, res) => {
});



app.listen(4000, () => {
    console.log('서버 작동중..')
})
const {create, select, selectAll} = require('../models/board');

// Create
const createBoard = (req) => {
    // body는app.use(express.urlencoded({extended : false})); 가 처리
    // file은 multer가 처리
    const {title, content} = req.body;
    const { filename } = req.file;

    const imgName = "http://localhost:3000/image/" + filename;
    create(title, content, imgName);
    // console.log(selectAll());
}

// Read

const selectBoardAll = () => {
    return selectAll();
}

// 상세 페이지 조회
const selectBoardIndex = (index) => {
    return select(index)
}


module.exports  = {createBoard, selectBoardAll, selectBoardIndex};
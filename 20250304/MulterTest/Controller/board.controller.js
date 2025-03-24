const {CreateCoffee, selectAll, selectIndex} = require('../Model/board.js')


// 매개변수로는 Express router에서 자동으로 전돨된 요청객체를 받는다
const CoffeBoard  =  (req) => {
    const {index, title, menu} =  req.body;
    console.log("요청된 번호", index)
    console.log("요청된 제목", title);
    console.log("요청된 메뉴", menu);
    const {filename}  = req.file;
    console.log("너냐?", filename)
    const imgName = "http://localhost:3000/image/" + filename;
    CreateCoffee(index ,title, menu, imgName)

}

// 전제 게시판 조회
const selectBoardAll = () => {
    return selectAll();
}

// 특정 게시판 조회
const selectBoardIndex =  (index) => {
    return selectIndex(index);
}

module.exports = {CoffeBoard, selectBoardAll, selectBoardIndex};
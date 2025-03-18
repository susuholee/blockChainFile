// Model에서 보낸 데이터 제어기능들을 불러온다
const {CreateCoffee, selectAll, select, selectIndex} =  require('../Model/board');

// CoffeBoard 라는 커피게시판 생성
// 매개변수로는 Express router에서 자동으로 전돨된 요청객체를 받는다
const CoffeBoard  =  (req) => {
    const {title, menu} =  req.body;
    console.log("요청된 제목, 메뉴 : ", title, menu);
    const {filename}  = req.file;
    const imgName = "http://localhost:3000/image/" + filename;
    CoffeBoard(title, menu, imgName)

}

// 전제 게시판 조회
const selectBoardAll = () => {
    return selectAll();
}

// 특정 게시판 조회
const selectBoardIndex =  (index) => {
    return selectIndex(index);
}

module.exports = {CoffeBoard, selectBoardAll, selectBoardIndex}
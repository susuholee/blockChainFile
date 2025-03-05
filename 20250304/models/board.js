let board = []; // 임시 게시글 데이터베이스

// 데이터의 조작

// Create
// 게시글 데이터 추가
// 게시글의 데이터를 저장
const create = (title, content, imgPath) => {
    board.push({title, content, imgPath}); // board[] 배열에 추가 
    return "게시글 추가 완료"
}

// Read
// 게시글의 데이터 조회
// 인덱스로 매개변수로 전달하여 해당 인덱스의 게시글 조회
const select = (index) => {
    return board[index];
}

// Read
// 전체 게시글 데이터 조회
const selectAll = () => {
    return board;
}

module.exports = {create, select, selectAll}
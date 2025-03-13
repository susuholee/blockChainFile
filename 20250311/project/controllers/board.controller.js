const {createBoardData, getBoardData, updateData, deleteData} = require('../models/board');

exports.create = async (title, content) => {
   await createBoardData(title, content);
}

exports.getBoard = async () => {
    return await getBoardData();
}

// getBoardIndex -> 특정 인덱스를 받아서 게시글을 반환하는 함수 
// 매개변수로 boardIndex라는 특정 인덱스를 넘겨주고
exports.getBoardIndex = async (boardIndex) => {
    const data = await getBoardData();
    console.log(data);
    return data[boardIndex];
    // 반환 받는데 data[boardIndex]를 받는다.
}

// BoardUpdate 라는 게시글 수정하는 함수
// 매개변수로는 boardIndex, title , content를 받는다
exports.BoardUpdate = async (boardIndex, title, content) => {
    const data = await getBoardData();
    console.log(data);
    console.log("요청된 boardIndex:", boardIndex);  // boardIndex 값 출력
    // 'update board set title=변수내용, content=변수내용 where id=보드인덱스'

    if(!data[boardIndex]){
        console.log("게시글을 찾을 수 없어!!");
        return;
    }

     // 게시글이 존재하면 수정
     data[boardIndex].title = title;
     data[boardIndex].content = content;
 
    try {
        await updateData(title, content, boardIndex);
        console.log("게시글 수정 완료");
    } catch (error) {
        console.error("게시글 수정 중 오류 발생:", error);
    }
};

exports.BoardDelete = async (boardIndex) => {
    // 데이터 가져오기
    const data = await getBoardData();
    console.log(data);
    console.log("요청된 boardIndex:", boardIndex);  // boardIndex 값 출력

    // boardIndex가 유효한지 확인
    if (!data[boardIndex]) {
        console.log("삭제할 게시글을 찾을 수 없어!!");
        return;
    }

    try {
        // 해당 게시글 삭제
        await deleteData(boardIndex);
        console.log("게시글 삭제 완료");
    } catch (error) {
        console.error("게시글 삭제 중 오류 발생:", error);
    }
};
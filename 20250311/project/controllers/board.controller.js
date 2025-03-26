const {createBoardData, getBoardData, updateData, deleteData} = require('../models/board');

exports.create = async (title, content) => {
   await createBoardData(title, content);
}

exports.getBoard = async () => {
    return await getBoardData();
}

// getBoardIndex -> 특정 인덱스를 받아서 게시글을 반환하는 함수 
// 매개변수로 boardIndex라는 특정 인덱스를 넘겨주고
exports.getBoardIndex = async (id) => {
    const data = await getBoardData(id);
    console.log(data);
    return data[id];
    // 반환 받는데 data[boardIndex]를 받는다.
}

// BoardUpdate 라는 게시글 수정하는 함수
// 매개변수로는 boardIndex, title , content를 받는다
// BoardUpdate 라는 게시글 수정하는 함수
// 매개변수로는 boardIndex(게시글 id), title, content를 받는다
exports.BoardUpdate = async (id, title, content) => {
    // getBoardData로 데이터를 가져옴
    const data = await getBoardData();
    console.log(data);
    console.log("요청된 id:", id);  // boardIndex 값 출력

    // 게시글 인덱스로 데이터를 찾음
    if (!data[id]) {
        console.log("게시글을 찾을 수 없어!!");
        return;
    }


    try {
        await updateData(title, content, id);
        console.log("게시글 수정 완료");
    } catch (error) {
        console.log("게시글 수정 중 오류 발생:", error);
    }
};


exports.BoardDelete = async (id) => {
    // 데이터 가져오기
    const data = await getBoardData();
    console.log(data);
    console.log("요청된 id:", id);

    // id가 유효한지 확인
    if (!data[id]) {
        console.log("삭제할 게시글을 찾을 수 없어!!");
        return;
    }

    try {
        // 해당 게시글 삭제
        await deleteData(id);
        console.log(`게시글  id 번째 ${id} 삭제 완료`);
    } catch (error) {
        console.log("게시글 삭제 중 오류 발생:", error);
    }
};
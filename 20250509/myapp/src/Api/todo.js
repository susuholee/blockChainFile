import axios from 'axios';

const API_BASE_URL = "http://localhost:4000"; // 도메인 주소

// 전체 리스트 조회
const readTodoList = async () => {
    const { data } = await axios.get(`${API_BASE_URL}/read`);
    // 상태 코드에 따라서 오류 메세지 처리리
    return data;
}

// 글 추가 
const createTodoList = async (name) => {
    const { data } =  await axios.post(`${API_BASE_URL}/create`, {name}) // 매개변수로 name 받아서 글추가
    // 상태 코드에 따라서 오류 메세지 처리
    return data;
}

// 글 수정
const updateTodoList = async (id, name) => {
    const { data } = await axios.put(`${API_BASE_URL}/update`, {id, name})
    return data;
}

// 글 삭제 
const deleteTodoList = async (id) => {
    const data = await axios.delete(`${API_BASE_URL}/delete`, {id})
    return data;
}

export {readTodoList, createTodoList, updateTodoList, deleteTodoList}
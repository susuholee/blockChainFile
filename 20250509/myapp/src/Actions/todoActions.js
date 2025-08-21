import { readTodoList, createTodoList, updateTodoList, deleteTodoList} from "../Api/todo";

// 액션의 타입을 상수로 정의
// 리듀서에 전달해서 사용할 상수
// 액션 생성자 함수에서 사용할 상수 => 리듀서에서 타입을 가지고 로직 실행
export const readTodoLoading = "TODO_LOADING";
export const readTodoResult = "TODO_REULST";
export const createList = "TODO_CREATE";
export const updateList = "TODO_UPDATE";
export const deleteList = "TODO_DELETE";

// 리듀서에서 호출할 내용
const todoLoading = () => ({type: readTodoLoading}); // 리듀서에서 반환하는 상태의 값이 로딩
const todoResult = (data) => ({type : readTodoResult, payload : data}); // 리듀서에서 반환하는 값이 로딩이 완료된 상태
const todoCreate = (data) => ({type : createList, payload : data}); // 리듀서에서 반환하는 값이 글 등록 성공한 이후
const todoUpdate = (data) => ({type : updateList, payload : data});
const todoDelete = (data) => ({type: deleteList, payload : data});

// 글을 조회하는 액션 생성자 함수
// 로딩 이후에 결과 호출
// readTodoAction : 로딩 이후에 글이 조회되는 함수
const readTodoAction = () => {
    return async (dispatch, getState) => {
        dispatch(todoLoading()); // 리듀서 함수 호출되면서 로딩상태

        const data = await readTodoList();
        dispatch(todoResult(data))// 리듀서 함수 호출되면서 글이 조회된 상태 업데이트
    }
}

// 글을 추가하는 액션 함수
const createTodoAction = (name) => {
    return async (dispatch, getState) => {
        const data = await createTodoList(name);
        dispatch(todoCreate({name}));
        dispatch(readTodoAction());
    }
}

// 글을 수정하는 액션 함수 
const updateTodoAction = (id, name) => {
    return  async (dispatch, getState) => {
        const data = await updateTodoList(id, name)
        dispatch(todoUpdate({id, name}))
        dispatch(readTodoAction());
    }
}

// 글을 삭제하는 액션 함수
const deleteTodoAction = (id) => {
    return async (dispatch, getState) => {
        const data = await deleteTodoList(id)
        dispatch(todoDelete({id}))
        dispatch(readTodoAction());
    }
}

export {readTodoAction, createTodoAction, updateTodoAction, deleteTodoAction}
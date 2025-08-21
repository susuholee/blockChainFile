import { readTodoLoading, readTodoResult, createList, updateList, deleteList} from "../Actions/todoActions";

const initState = {
    loading : false,
    todos : [],
} // 초기 상태 


const reducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case readTodoLoading:
            return {...state, loading : true};
        case readTodoResult:
            return {...state, loading : false, todos : payload.data};
        case createList:
            return {...state, todos : [...state.todos, {name : payload.name}]}
        case updateList:
            return  {...state, todos : state.todos.map(el => el.id === payload.id ? {...el, name : payload.name} : el)}
        case deleteList:
            return {...state, todos : state.todos.filter(el => el.id !== payload.id)}
        default:
            return state;
    }
}

export default reducer;
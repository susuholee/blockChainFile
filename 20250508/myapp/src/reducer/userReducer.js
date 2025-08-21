// 유저 관련된 상태를 제어할 순수 함수

// 초기값

const initState = {
    userInfo : null
}

const reducer = (state = initState, action) => {
    const {type, payload} = action;

    // 조건문 작성 어떤 액션이 들어왓는지
    switch (type) {
        case "LOGIN":
            // API 호출 부분 비동기 처리부분은 리듀서에 작성 X
            // redux-thunk 미들웨어 하나 추가해서 비동기 로직 처리


             return {...state, userInfo : {nick : "suho"} };
        case "LOGOUT":
            
             return {...state, userInfo : null};
    
        default:
             return state;
    }
}

export default reducer;
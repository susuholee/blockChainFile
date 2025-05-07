 const initState =  {uid  : "", nick : "", isLogin : false} // 초기상태를 선언해놓을 객체
 const LOGIN = "LOGIN"; // 상수로 선언
 const LOGOUT = "LOGOUT";
 const reducer = (state, action) => {
    // 두 번째 매개변수에는 {type , payload}
    // state는 이전의 상태
    
    const {type, payload} = action;
    // type : 어떤 기능을 호출할건지
    // payload : 어떤 행동에 필요한 값이 있으면 값을 전달
    switch (type) {
        case LOGIN : // increament : 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다.
        // 왜냐? 상태를 return된 값으로 업데이트 하기 때문에
        // 행동이 없어도 return 해야한다.
            const {uid, upw } = payload;
            // axios 요청해서 유저 아이디랑 닉네임 정보 받아서
            const nick = "suho";
            console.log(uid, upw, nick);
            return {...state, uid, nick, isLogin : true}
        case LOGOUT : // increament : 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다.
            return {...initState}        
        default : return {...state} // 이전 상태 값을 반환하거나, 에러를 던져서 에러를 방지한다.
    } 
}

export {LOGIN, LOGOUT, initState, reducer}

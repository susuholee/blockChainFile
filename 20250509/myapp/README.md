# redux-thunk
> redux는 순수함수를 사용하는 철학을 가지고 있어서
> redux에서 비동기 로직을 직접 작성하지않고 미들웨어로 외부로 나눠서 작성해서 사용한다.
> 미들웨어 추가를 thunk하게되면 api요청에 대한 함수 로직은 thunk로 미들웨어 추가가 가능하다.

## redux의 문제점
> action 객체를 전달한다.
> 비동기 로직을 작성할때

```js
dispatch({})
const reducer = () => {
    switch () {
        case: 
        return 
    }
}


// 내부적으로 
dispatch({}) // thunk를 미들웨어로 추가하면
// dispatch에 전달한 매개변수의 타입에 따라 리듀서 호출인지 액션함수 호출인지
const dispatch = (action) => {
    if(typeof action === "object") {

    } else if (typeof action === "function")
}

// 액션 생성자
// 클로저에 해당
// 함수 값을 반환하는 함수 
const actionFn = (id) => (dispatch, getState) => {
    // getState : 현재 상태값
    // dispatch : thunk를 미들웨어로 추가하기 이전에 사용하던 dispatch
    // 비동기 처리 로직
    const data = axios({url : `http://localhost:4000//board/${id}`})
    // 상태 전환
    dispatch({type : "", payload : data })
}

// 액션 생성자
// 클로저에 해당
function actionFn()  {

    return (dispatch, getState) => {
    // getState : 현재 상태값
    // dispatch : thunk를 미들웨어로 추가하기 이전에 사용하던 dispatch
    // 비동기 처리 로직
    const data = axios({url : `ttp://localhost:4000//board/${}`})
    // 상태 전환
    dispatch({type : "", payload : data })
    }
}

// 잠시 지연하는 용도의 래핑
dispatch(actionFn(1))
```

### redux-thunk 등장
> redux-thunk는 javascript 프로그래밍 개념
> thunk는 어떤 로직, 즉 표현을 지연한다.
> 로직을 나중에 실행시키기 위해서 함수로 래핑하여 지연시키는 것
> 클로저와 관련이 깊다
> 클로저 : 함수가 선언될 당시의 외부 변수(렉시컬 환경)를 기억하고, 그 함수가 나중에 호출되더라도 그 변수들에 접근할 수 있는 것

### thunk 동작
> dispatch에 전달된 매개변수가 함수면 함수를 실행
> 실행된 함수에 매개변수로 dispatch, getState 두가지의 인자 값으로 전달한다.

```js
// thunk를 사용하기 이전
// thunk 쪽에서 로그인 로직 처리
dispatch({type : "LOGIN"})

// 액션 생성자
dispatch((dispatch, getState) => {
    // 비동기 로직 처리
    dispatch({type : "LOGIN"})
})

// 상태의 변화를 잠시 뒤로 미룬다.
// 비동기 로직을 처리한 뒤에 실행하기 위해서 지연시키는것.
// 디스패치 => 액션 생성자 => 리듀서 => 스토어 업데이트
```

### thunk의 목적
1. API의 로직을 비동기적으로 호출한 이후에 Store 업데이트
2. 액션 생성자 함수를 미들웨어로 추가해서 실행
3. 비동기로 로직과 동기 로직의 구분을 지어서 관리할 수 있다.

### thunk 문법
```sh
# redux-thunk 설치
npm i redux-thunk
```

```js

// store.js
import { createStore, applyMiddleware } from 'redux'; // 저장소 생성
import thunk from 'redux-thunk'
import reducer from './reducer' 

// 중간에 미들웨어(thunk) 추가
// 내부 로직의 미들웨어를 추가하기 위해서 스토어 생성할때 매개변수로 미들웨어를 전달

const store = createStore(reducer, applyMiddleware(thunk))

// applyMiddleware 내부에는 dispatch, getState 객체가 들어있다.
// 중간에 dispatch를 호출하면 실행될 미들웨어를 추가
applyMiddleware({dispatch, getState} => 
    action =>
    (dispatch, getState) =>{ 
})

// action create 함수
// userAction.js
import axios from 'axios';

// 유저의 프로필 정보를 요청하는 로직
// getUserAction (nick) 매개변수로 받는다
// 매개변수를 받는 이유는 
// 함수인데 함수값을 반환
export const getUserAction = (nick) => {
    return async (dispatch, getState) => { // 여기서 비동기 로직 처리
        const { data } = await axios.get(`http://localhost:4000/
        userinfo?nick=${nick}`) // 비동기 요청 후 아래 코드 실행
        // 전역상태 업데이트
        dispatch({type : "USERINFO", payload : data})
    } 
    // 반환을 하는데 익명함수로 반환
} 

// 컴포넌트에서 호출
import { useDispatch } from 'react-redux'
import { getUserAction } from './Actions/userAction.js';

const App = () => {
    const dispatch = useDispatch();

    const handler = () => {
        dispatch(getUserAction("suho"))

        const dispatch = (action) => {
            if(typeof action === "object") {
                // 타입 검사후 -> 객체면
                // 상태 업데이트 리듀서가 호출
                // 반환받은 값을 state에 업데이트

            } else if(typeof action === "function") {
                action(dispatch, getState)
                // 타입 검사후 -> 함수면
                // action이 실행되면서
                // dispatch와 getState를 매개변수로 전달해서 또 다른 dispatch를 비동기적으로 처리
            }
        }
    }

    return (<button>프로필 조회</button>)
}
```


### Todo List 만들어보자 실습
```sh
## 프론트엔드 모듈 설치
npm i redux react-redux axios redux-thunk styled-components

##  백엔드 모듈 설치
npm i express cors mysql2 sequelize

## 폴더 구조
src 
    -- Api # api 요청 로직의 코드 내용
        -- todo.js
    -- Actions # 액션 생성자 함수
        -- todoActions.js
    -- Reducers # 리듀서 함수
        -- todoReducers.js  
    -- Store # redux 스토어 저장소 초기화
        -- index.js 
    -- Components # 컴포넌트
        -- Atoms (원자)
        -- Molecules (분자)
        -- Organisms (유기체)
        -- Pages (레이아웃)
app.js
```
## thunk react query
> 자주 조회되는 내용은 텐스텐 쿼리로
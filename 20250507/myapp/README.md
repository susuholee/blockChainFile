# react router, useReducer

## react router는 새로고침이 되지않는 페이지
> react에서 기본적인 라우팅을 제공하지 않고 react-router-dom 이라는 라이브러리가 제공을 하게 되었다.
> 이전에 정적인 멀티페이지 방식에서는 새로고침이 일어나도 괜찮았지만
> SPA가 등장하면서 리액트 혹은 뷰 등등 새로고침되어서 자바스크립트가 다시 초기부터 동작하는 로직을 방지 하게 하였다. 상태변수가 초기화 되는 문제점.
> 주소가 바뀌어도 브라우저가 새로고침되지 않고 url의 변경을 감지하면 이동 새로고침을 막아버리고 컴포넌트를 보여주는 조건을 통해서 컴포넌트 브라우저에 랜더링

- react에서는 기본 라우팅 기능을 제공하지 않는다.
- react의 라우팅을 보완하기 위해서 react- router-dom을 제공
- react-router, react-router-dom 두가지를 제공

1. react-router : 라우팅의 기능만 가지고 있는 라이브러리
2. react-router-dom : 브라우저환경에서 dom을 보여주는 동작을 하는 라이브러리

```sh
npm i react-router-dom
```

```js
// BrowserRouter : html5의 히스토리 api를 사용한 라우팅 페이지 전체를 감싸는 부모컴포넌트
// Routes : 여러개의 페이지 컴포넌트를 감싸는 부모 컴포넌트
// Route : 어떤 컴포넌트를 보여줄지 url의 조건

const Main = () => {
    return <></>
}

const Board = () => {
    return <></>
}


// / 경로일때 메인 페이지를 랜더링
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    // 페이지 구조
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
            <Route path="/board" element={<Board />}>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 페이지 이동

```js
// 메인 페이지에서 게시판 페이지로 이동
// Link의 컴포넌트는 a요소를 반환하는데 새로고침이 일어나지않게 기능을 막고
// url경로만 변경될수 있도록 기능 제공
import { Link } from "react-router-dom"

const Main = () => {
    return <>
        <Link to="/board">게시판으로 이동</Link>
    </>
}
```


### 파라미터가 필요한 경우

```js
import { Link } from "react-router-dom"

const Main = () => {
    return <>
        <Link to="/board/1">1번 게시판으로 이동</Link>
        <Link to="/board/2">2번 게시판으로 이동</Link>
        <Link to="/board/3">3번 게시판으로 이동</Link>
        <Link to="/board/4">4번 게시판으로 이동</Link>
    </>
}

import { useParams } from "react-router-dom" 
const Board = () => {
    const {id} = useParams() // === {id : 1}
    return <></>
}


///////////
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    // 페이지 구조
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
            <Route path="/board/:id" element={<Board />}>
        </Routes>
    </BrowserRouter>
  );
}

```

### 자바스크립트 코드 내용에서 페이지 이동

```js
import { useNavigate } from "react-router-dom"
// 코드 로직에서 페이지를 이동시켜야하는 경우


const Main = () => {
    const navigate = useNavigate(); // 반환값이 제공하는건 페이지를 이동할수 있는 기능을 가지고 있는 함수
    const boardPageHandler = (params) => {

        // 자바스크립트 코드 영역에서 페이지 이동이 필요한 경우
        navigate(`/board/${params}`)
    }

    return <>
        <div onClick={() => boardPageHandler("1")}>1번 게시판으로 이동</div>
        <div onClick={() => boardPageHandler("2")}>2번 게시판으로 이동</div>
        <div onClick={() => boardPageHandler("3")}>3번 게시판으로 이동</div>
        <div onClick={() => boardPageHandler("4")}>4번 게시판으로 이동</div>
    </>
}
```

### 페이지의 리다이렉트
> 접근 권한이 있어야하는 페이지등의 조건이 필요한경우

```js
const Mypage = () => {

}

import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { useState } from "react";
// Navigate 리다이렉트를 하는데 새로고침이 되지 않는다.
function App() {
    const [login, setLogin] = useState(false);

    // 컴포넌트가 컴포넌트를 받아서 조건에 따라서 컴포넌트를 반환
    // HOC 고차 컴포넌트 => 고차 컴포넌트의 정의 컴포넌트를 전달받아서 컴포넌트의 커스텀
    const MypageRoute = (MyCom) => {
        if(login)
        return (<MyCom />)
        return (<Navigate to="/" />)
    }

    return (
        // 페이지 구조
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/board/:id" element={<Board />} />
                <Route path="/mypage" element={MypageRoute(MyPage)} />
            </Routes>
        </BrowserRouter>
    );
}
```

### 실습
```sh
npm i styled-components
```

> 마이페이지에 접근하면 로그인이 되어있는 상태인지 확인해서 로그인이 안되어있으면 리다이렉트

## useReducer
> useState를 대체할수 있는 hook 함수
> useState는 단순한 값의 상태를 관리할때
> useReducer는 복잡한 값 즉 여러개의 값을 구분지어서 관리할때 가독성의 이점을 가질수 있다.
> 복잡한 값을 기능을 구분지어서 상태를 관리할때 하지만 api 로직은 피해서 작성하는게 좋다.
> redux의 개념을 가지고 괜찮은데 만든 hook useReducer 리듀서를 기반으로 상태를 한곳에서 가독성이 좋게 처리하자

- 컴포넌트의 내부가 복잡해지는 것을 방지
- 상태의 의존성을 관리할수 있다.
- 상태를 관리할때 로직을 컴포넌트의 내부에 위치하지않게 분리 할수 있는 이점

// 음식점에 메뉴판 (리듀서 함수)
1. state
    - 사용할 상태 변수
2. dispatch   dispatch({type : "", payload : {}})
    - 상태를 변화시키기 위해서 데이터를 보낸다.
    - 리듀서의 함수로 제공된다.
    - 함수를 호출하면 객체를 전달하고 객체의 내용을 가지고 상태를 업데이트 시킨다.
    - type, payload 두가지의 값을 가지고 있는 객체를 전달해서 상태를 업데이트한다.
    - type은 행동 어떤 로직을 호출하는것인지
    - payload는 행동을 할때 필요한 값
3. initialState
    - 초기 상태의 값
4. reducer
    - 기능의 내용을 정의해놓은 함수

```js
const [count,setCount] = useState(0);
const increment = () => {
    setCount(prev => prev + 1)
}

/// reducer
import {useReducer} from "react";
// uid : "", nick : "", isLogin : false
const initState = {count : 0}
const increment = "INCREMENT";
const decrement = "DECREMENT";
const reducer = (state, action) => {
    /// 두번째 매개변수에는 {type, payload}
    // state는 이전의 상태
    const {type, payload} = action;
    // type이 어떤 기능을 호출할건지.
    switch (type) {
        case increment : // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return된 값으로 업데이트 하기때문에
            return {...state, count : state.count + payload.count}
        case decrement : // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return된 값으로 업데이트 하기때문에
            return {...state, count : state.count - payload.count}
        default : return {...state} // 상태변화 에러 방지
    }
}
dispatch({type : increment, payload : {count : 5}})


// userReducer.js
export const initState = {uid : "", nick : "", isLogin : false}
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
export const reducer = (state, action) => {
    /// 두번째 매개변수에는 {type, payload}
    // state는 이전의 상태
    const {type, payload} = action;
    // type이 어떤 기능을 호출할건지.
    switch (type) {
        case LOGIN : // increment 타입일 경우 로직이 여기에 작성되고 return 값이 없으면 안된다. 상태를 return된 값으로 업데이트 하기때문에
            const {uid, upw} = payload;
            // axios 요청해서 유저 아이디랑 닉네임
            const nick = "soon";
            return {...state, uid, nick, isLogin : true}
        case LOGOUT : 
            return {...initState}
        default : return {...state} // 상태변화 에러 방지
    }
}

// 코드 가독성

import {useReducer} from "react";
import {initState, reducer} from "userReducer.js"
const MainPage = () => {
    const [state, dispatch] = useReducer(reducer, initState); // useReducer 상태변수 초기화

    const Login  = () => {
        dispatch({ type : LOGIN, payload : {uid : "soon", upw : "1234"} })
    }
}
```
### todo
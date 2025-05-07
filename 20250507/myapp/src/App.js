import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Header from './Components/molecules/Header'
import Main from './Components/page/Main'
import Board from './Components/page/Board'
import MyPage from './Components/page/MyPage'
import Login from './Components/page/Login'
import { initState, reducer } from './Store/useReducer'

const App = () => {
    const [state, dispatch] = useReducer(reducer , initState); // 유저 상태를 관리하는 리듀서

    const MypageRoute = (Page) => {
        if(state.isLogin)
        return (<Page />)
        return (<Navigate to="/" />) // 리다이렉트 -> 새로고침이 일어나는게 아니고, 경로만 바뀌는것
    }
    
  return (
        <BrowserRouter>
        {/* 항상 페이지의 남아있어야하는 컴포넌트 */}
            <Header userInfo={state}  dispatch={dispatch} />
            {/* Routes 컴포넌트의 조건부의 부분 */}
            {/* 자바스크립트가 경로에 따라서 동적으로 요소를 렌더링 해주는 구조  */}
            {/* MPA 페이지 새로고침 되어서 자바스크립트가 처음부터 동작하는 구조 */}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/board' element={<Board />} />
                <Route path='/login' element={<Login  dispatch={dispatch}/>} /> 
                <Route path='/mypage' element={MypageRoute(MyPage)} />
            </Routes>
            {/* 푸터 */}
        </BrowserRouter>
  )
}

export default App

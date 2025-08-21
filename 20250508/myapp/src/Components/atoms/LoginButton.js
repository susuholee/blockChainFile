import React from 'react'
import { useDispatch } from 'react-redux'

// 전역상태 업데이트
const LoginButton = () => {
    const dispath = useDispatch(); // 주입 받은 스토어의 dispatch 참조
  return (
    <div>
      <button onClick={() => dispath({type : "LOGIN"})}>로그인</button>
    </div>
  )
}

export default LoginButton

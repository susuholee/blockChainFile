import React from 'react'
import { useDispatch } from 'react-redux'

const LogoutButton = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch({type :"LOGOUT"})}>로그아웃</button>
    </div>
  )
}

export default LogoutButton

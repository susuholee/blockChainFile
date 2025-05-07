import React from 'react'
import useInput from '../Hooks/useInput'
import { LOGIN } from '../../Store/useReducer';

const Login = ({dispatch}) => {
    const uidInput = useInput();
    const upwInput = useInput();

    const login = () => {
        dispatch({type : LOGIN, payload : {uid : uidInput.value, upw : upwInput.value}});
    }
  return (
    <div>
        <label>아이디</label>
        <input {...uidInput}/>
        <label>비밀번호</label>
        <input {...upwInput} />
        <button onClick={login}>로그인</button>
    </div>
  )
}

export default Login

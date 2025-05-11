import React from 'react'
import styled from 'styled-components'
import Input from '../atoms/input/Input'
import CheckBox from '../atoms/checkBox/CheckBox'

const Wrap = styled.div`
    width: 600px;
    min-height: 340px;
    background-color: #fff;
    padding: 30px 0 18px 0;
    border-radius: 15px;
    margin : 30px auto 0 auto;
    box-sizing: border-box;
    box-shadow:  0 0 18px -16px;
    .login-input-wrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        margin-bottom: 24px;
        width: max-content;
    }
    .information-wrap {
        width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .information-content  {
        display: flex;
        gap : 10px;
        font-size: 16px;
        line-height: 22px;
        overflow: hidden;
        font-weight: 400;
        color : #777;
    }

    span {
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E8EAEE;
        margin: 30px 0 20px 0;
    }
    button{
        display: block;
        width: 100px;
        height: 40px;
        background-color: #5569FF;
        border-radius: 6px;
        margin: 0 auto;
        border: none;
        outline: none;
        color : #fff;
        font-size: 14px;
        font-weight: bold;
        line-height: 40px;
    }
`

const LoginWrap = () => {
  return (
    <Wrap>
        <div className='login-input-wrap'>
            <Input width={'500px'} label={"아이디"} placeholder={"아이디를 입력해주세요"}/>
            <Input width={'500px'} label={"비밀번호"} placeholder={"비밀번호를 입력해주세요"}/>
        </div>
        <div className='information-wrap'>
            <div className='information-content'>
                <CheckBox /> 로그인 정보 저장
            </div>
            <div className='information-content'>
                <div className='information-content'>
                <CheckBox  type='radio' inputName={"userSelect"}/> 운영자 

                </div>
            <div className='information-content'>
                <CheckBox  type='radio' inputName={"userSelect"}/> 교강사사
                </div>
            </div>
        </div> 
            <span></span>
            <button>로구인</button>
    </Wrap>
  )
}

export default LoginWrap

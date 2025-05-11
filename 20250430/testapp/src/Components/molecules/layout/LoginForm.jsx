import React from 'react'
import Input from '../../atoms/input/Input'
import styled from 'styled-components'
import CheckBox from '../../atoms/checkbox/CheckBox'
import TextLabel from '../../atoms/label/TextLabel'
import Button from '../../atoms/button/Button'
import Stick from '../../atoms/stick/Stick'
import Tooltip from './Tooltip'
import KakaoLogo from '../kakaoLogo/KakaoLogo'
import Socialicons from './Socialicons'
import Footer from './Footer'
import Header from './Header'

const LoginWrap = styled.div`
    width: 312px;
    height: 236px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding : 40px 32px 0 32px;
`
const MiddleWrap = styled.div`
    width: 79px;
    height : 20px;
    display: flex;
    justify-content: center;
    left : 32px;
`

const UserinforWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 233px;
    height: 14px;
    gap: 10px;
    line-height: 100%;
`

const SocialIconWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 311px;
    height: 138px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`

const LoginForm = () => {
  return (
    <>
    <Header/>

    <LoginWrap>
      <Input  width={"310px"} height={"48px"} placeholder={"아이디 또는 이메일"}/>
      <Input  width={"310px"} height={"48px"} placeholder={"비밀번호"}/>

      <MiddleWrap>
        <CheckBox  type={"checkbox"}/>
        <TextLabel width={"55px"} height={"12px"}>아이디 저장</TextLabel>
      </MiddleWrap>

      <Button width={"312px"} height={"56px"}>로그인</Button>

      <UserinforWrap>
      <TextLabel width={"49px"} height={"14px"}>회원가입</TextLabel><Stick/>
      <TextLabel width={"65px"} height={"14px"}>아이디 찾기</TextLabel><Stick/>
      <TextLabel width={"77px"} height={"14px"}>비밀번호 찾기</TextLabel>
      </UserinforWrap>
    </LoginWrap>

      <Tooltip/>

    <SocialIconWrap>
      <KakaoLogo/>
      <Socialicons/>
    </SocialIconWrap>
      <Footer  width={"141px"} height={"16px"}>로그인 · 회원가입 문의</Footer>
      </>
  )
}

export default LoginForm

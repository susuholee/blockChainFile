import React from 'react'
import LoginForm from '../molecules/layout/LoginForm'
import styled from 'styled-components'


const Wrap = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 812px;
  background-color:#FFFFFF;
`

const LoginPage = () => {
  return (
    <Wrap>
      <LoginForm/>
    </Wrap>
  )
}

export default LoginPage

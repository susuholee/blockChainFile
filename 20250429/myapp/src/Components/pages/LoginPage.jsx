import React from 'react'
import LogoHeader from '../molecules/layout/LogoHeader'
import styled from 'styled-components'
import LoginWrap from '../templates/LoginWrap'

const Wrap = styled.div`
    background-color: #E7EEF8;
    min-height: 100vh;
`

const LoginPage = () => {
  return (
    <Wrap>
        <LogoHeader />
        <LoginWrap/>
    </Wrap>
  )
}

export default LoginPage

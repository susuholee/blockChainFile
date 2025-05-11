import React from 'react'
import styled from 'styled-components'
import Close from '../../atoms/icons/Close'
import TextLabel from '../../atoms/label/TextLabel'


const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 375px;
    height: 50px;
    text-align: center;
`

const Header = () => {
  return (
    <Wrap>
      <Close/>
      <TextLabel width={"47px"} height={"18px"} color={"#000000"}>로그인</TextLabel>
    </Wrap>
  )
}

export default Header

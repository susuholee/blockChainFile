
import React from 'react'
import styled from 'styled-components'


const ButtonWrap = styled.div`
  display: inline-block;
  padding: 14px 25px;
  box-sizing: border-box;
  border-radius: 10px;
  border : 1px solid;
`

const Button = ({children, onClick}) => {
  return (
    <ButtonWrap onClick={onClick}>
      {children}
    </ButtonWrap>
  )
}

export default Button

import React from 'react'
import styled from 'styled-components'


const ButtonWrap = styled.button`
    display: flex;
    justify-content: center;
    width: ${({width}) => width ? width : "30px"};
    height: ${({height}) => height ? height : "20px"};
    color : ${({color}) => color ? color : "#FFFFFF"};
    background-color: #5569FF;
    border-radius: 6px;
`


const Button = ({width, height, children, color}) => {
  return (
    <ButtonWrap width={width} height={height} color={color}>{children}</ButtonWrap>
  )
}

export default Button

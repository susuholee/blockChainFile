import React from 'react'
import styled from "styled-components"


const TextWrap = styled.div`
    width: ${({width}) => width ? width : "40px"};
    height: ${({height}) => height ? height : "30px"};
    color: ${({color}) => color ? color : "#696969"};
    white-space: nowrap;
`

const TextLabel = ({width, height, children, color}) => {
  return (
    <TextWrap width={width} height={height} color={color}>{children}</TextWrap>
  )
}

export default TextLabel

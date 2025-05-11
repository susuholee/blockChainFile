import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
    width: ${({width}) => width ? width : "40px"};
    height: ${({height}) => height ? height : "50px"};
    background-color: #909090;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#FFFFFF ;
    margin-bottom : 20px;
    padding: 16px;
`

const Button = ({width, height, children, padding}) => {
  return (
    <Wrap width={width} height={height} padding={padding}>{children}</Wrap>
  )
}

export default Button

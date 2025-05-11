import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: ${({width}) => width ? width : "50px"};
    height: ${({height}) => height ? height : "40px"};
    border-radius: 4px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    padding: 16px;

    input {
        width: 100%;
        height: 100%;
        outline: none;
        border: 0;
        background-color: transparent;
        color : #909090;
    }
`

const Input = ({width, height, placeholder}) => {
  return (
    <Wrap width={width} height={height} placeholder={placeholder}>
      <input type='text' placeholder={placeholder}/>
    </Wrap>
  )
}

export default Input

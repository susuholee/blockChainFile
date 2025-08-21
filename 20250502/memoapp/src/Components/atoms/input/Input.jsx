import React from 'react'
import styled from 'styled-components'


const Inputwrap = styled.div`
    display: flex;
    align-items: center;
    width: ${({width}) => width ? width : "30px"};
    height: ${({height}) => height ? height : "40px"};
    border: 1px solid #CBD0D7;
    border-radius: 8px;
    padding: 4px 10px;
    margin-top: 4px;
    margin-right: 10px;
    margin-bottom: 4px;
`

const Input = ({width, height, children}) => {
  return (
    <Inputwrap width={width} height={height}>
        {children}
    </Inputwrap>
  )
}

export default Input

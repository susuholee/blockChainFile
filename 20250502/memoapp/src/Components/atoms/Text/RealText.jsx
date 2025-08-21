import React from 'react'
import styled from 'styled-components'


const TextWrap = styled.div`
    display: flex;
    justify-content: center;
    width: ${({width}) => width ? width : "40px"};
    height: ${({height}) => height ? height : "30px"};
    padding : ${({padding}) => padding ? padding : "4px 10px 4px"};
`


const RealText = ({width, height, padding, value}) => {
  return (
    <TextWrap width={width} height={height} padding={padding}>
        <input type='text' value={value} />
    </TextWrap>
  )
}

export default RealText

import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    /* 자바스크립트 영역이기 때문에 함수 물론 사용 가능 */
    width: ${({width}) => width ? width : "20px"};
    height: ${({height}) => height ? height : "60px"};
    background-color: #fff;
    border: 1px solid #CBD0D7;
    border-radius: 8px;
    padding : 10px 25px;
    box-sizing: border-box;
    position: relative;

    &::before {
        content: '${(props) => props.label || ""}';
        height: 30px;
        background-color: #fff;
        display: block;
        position: absolute;
        padding: 0 5px;
        left : 25px;
        line-height: 30px;
        top : 0;
        transform: translateY(-50%);
        color: #777;
        font-size: 16px;
        font-weight: 400;
    }

    input {
        width: 100%;
        height : 100%;
        outline: none;
        border: 0;
        background-color: transparent;
        font-weight: 400;
        font-size: 16px;
        color: #333;
    }
`


const Input = ({width, height, label, placeholder}) => {
  return (
    <Wrap width={width} height={height} label={label}>
        <input type="text"  placeholder={placeholder}/>
    </Wrap>
  )
}

export default Input

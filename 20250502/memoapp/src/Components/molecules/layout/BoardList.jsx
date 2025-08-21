import React from 'react'
import styled from 'styled-components'
import RealText from '../../atoms/Text/RealText'
import TextInput from '../../atoms/input/TextInput'
import Button from '../../atoms/Button/Button'
import TextLabel from '../../atoms/Text/TextLabel'


const TestWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  height: 40px;
  border-bottom: 1px;
  margin-bottom: 4px;
  box-sizing: border-box;
`

const BoardList = () => {
  return (
    <TestWrap>
        <RealText width={"200px"} height={"40px"}></RealText>
        <TextInput width={"940px"} height={"24px"}></TextInput>
        <Button width={"82px"} height={"40px"}>
        <TextLabel width={"52px"} height={"40px"} color={"#FFFFF"}>글 추가</TextLabel> 
      </Button>
    </TestWrap>
  )
}

export default BoardList

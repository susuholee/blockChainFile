import React from 'react'
import TextLabel from '../../atoms/Text/TextLabel'
import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/Button/Button'

const TitleWrap = styled.div`
  width: 1080px;
  height: 30px;
  background-color: #F2F5F9;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`
const LevelWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 1080px;
  height: 40px;
  border-bottom: 1px;
  margin-bottom: 4px;
`

const LevelList = () => {
  return (
    <>
    <TitleWrap>
      <TextLabel width={"40px"} height={"30px"}>NO</TextLabel>
      <TextLabel width={"980px"} height={"30px"}>평가항목</TextLabel>
      <TextLabel width={"60px"} height={"30px"}>배점</TextLabel>
    </TitleWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"} padding={"10px"}>1</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>2</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>3</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>4</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>5</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>6</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>7</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>8</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>9</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>

    <LevelWrap>
      <TextLabel width={"40px"} height={"40px"}>10</TextLabel> 
      <Input width={"960px"} height={"30px"}>
        <TextLabel width={"940px"} height={"24px"}>XR 애플리케이션 개발을 위한 VR/AR 프로그래밍</TextLabel>
       </Input>

      <Input width={"60px"} height={"32px"}>
        <TextLabel width={"40px"} height={"24px"}>10점</TextLabel>
      </Input>
    </LevelWrap>


    <LevelWrap>
      <Button width={"82px"} height={"40px"}>
        <TextLabel width={"52px"} height={"40px"} color={"#FFFFF"}>글 추가</TextLabel> 
      </Button>
    </LevelWrap>

    </>
  )
}

export default LevelList

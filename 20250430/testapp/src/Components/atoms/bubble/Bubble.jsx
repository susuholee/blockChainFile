import React from 'react'
import styled from 'styled-components'
import TextLabel from '../label/TextLabel'

const Wrap = styled.div`
    width: 125px;
    height: 22px;
    padding: 4px 10px;
    background-color:#FF4D2A;
    border-radius: 10px;
`

const Bubble = () => {
  return (
    <Wrap>
        <TextLabel width={"105px"} height={"14px"} color={"#FFFFFF"} fontSize={"14px"} fontWeight={"600"} padding={"4px 10px"}>간편하게 시작하기!</TextLabel>
    </Wrap>
  )
}

export default Bubble

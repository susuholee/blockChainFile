import React from 'react'
import styled from 'styled-components'
import Icons from '../../atoms/icons/Icons'
import { facebookImg, naverImg, appleImg } from '../../../images'

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 56px;
  margin-top: 32px;
`

const Socialicons = () => {
  return (
    <IconWrap>
      <Icons src={facebookImg} width={"56px"} height={"56px"}/>
      <Icons src={naverImg} width={"56px"} height={"56px"}/>
      <Icons src={appleImg} width={"56px"} height={"56px"}/>
    </IconWrap>
  )
}

export default Socialicons

import React from 'react'
import styled from 'styled-components'
import LevelList from '../molecules/layout/LevelList'

const LevelListWrap = styled.div`
  width: 1080px;
  height: 430px;
  margin: 0 auto;

`

const LevelPage = () => {
  return (
    <LevelListWrap>
      <LevelList/>
    </LevelListWrap>
  )
}

export default LevelPage

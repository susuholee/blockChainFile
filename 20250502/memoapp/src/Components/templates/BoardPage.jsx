import React from 'react'
import styled from 'styled-components'
import BoardList from '../molecules/layout/BoardList'

const LevelListWrap = styled.div`
  width: 1080px;
  height: 430px;
  margin: 0 auto;
`

const BoardPage = () => {
  return (
    <LevelListWrap>
       <BoardList>
       </BoardList>
    </LevelListWrap>
  )
}

export default BoardPage

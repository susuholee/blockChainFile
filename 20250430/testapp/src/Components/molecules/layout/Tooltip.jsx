import React from 'react'
import styled from 'styled-components'
import Bubble from '../../atoms/bubble/Bubble'
import Tail from '../../atoms/Tail/Tail'


const Wrap = styled.div`
    width: 125px;
    height: 28px;
    margin-top: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 4px;
`


const Tooltip = () => {
  return (
    <Wrap>
      <Bubble/>
      <Tail/>
    </Wrap>
  )
}

export default Tooltip

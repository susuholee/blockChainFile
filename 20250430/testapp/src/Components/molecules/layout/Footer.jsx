import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    margin: 0 auto;
    width: ${({width}) => width ? width : "30px"};
    height: ${({height}) => height ? height : "30px"};
    font-size: 18px;
    font-weight: bold;
    color: #909090;
    margin-top: 160px;
    white-space: nowrap;
`

const Footer = ({width, height, children}) => {
  return (
    <Wrap width={width} height={height}>
      {children}
    </Wrap>
  )
}

export default Footer

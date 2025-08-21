import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: ${({width}) => width ? width : "40px"};
    height: ${({height}) => height ? height : "30px"};
    padding : ${({padding}) => padding ? padding : "4px 10px 4px"};
`


const TextLabel = ({width, height, children, padding, color}) => {
  return (
    <Wrap width={width} height={height} padding={padding} color={color}>{children}</Wrap>
  )
}

export default TextLabel

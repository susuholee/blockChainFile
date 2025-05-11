import React from 'react'
import styled from 'styled-components'

const CheckBoxWrap = styled.div`
    width: 22px;
    height: 22px;
    border: 1px solid #DDDDDD;
    border-radius: 4px;
    box-sizing: border-box;
`

const CheckBox = ({type}) => {
  return (
    <CheckBoxWrap>
      <input type={type} />
    </CheckBoxWrap>
  )
}

export default CheckBox

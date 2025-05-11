import React from 'react'

const Text = ({width, heigth, children}) => {
  return (
    <div width={width} heigth={heigth}>{children}</div>
  )
}

export default Text

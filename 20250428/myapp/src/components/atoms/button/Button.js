import React from 'react'

const Button = ({isIcon,onclick, children}) => {
  return (
    <div className='main-button' onClick={onclick}>
        {isIcon ? <i>+ </i> : null }
        <div>{children}</div>
    </div>
  )
}

export default Button

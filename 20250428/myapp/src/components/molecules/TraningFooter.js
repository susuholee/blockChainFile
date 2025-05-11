import React from 'react'
import Button from '../atoms/button/Button'
import Dropdown from '../atoms/button/Dropdown'
const TraningFooter = () => {
  return (
    <div className='traning-wrap'>
        <div className='traning-select-box'>
            <Dropdown />
            <Button>변경</Button>
        </div>
        <Button>정보수정</Button>
    </div>
  )
}

export default TraningFooter

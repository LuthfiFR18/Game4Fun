import React from 'react'
import '../style/Button.css'

const Button = (btn) => {

  return (
    <div className='btn'>
        <button>{btn.name}</button>
    </div>
  )
}

export default Button
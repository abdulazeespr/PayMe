import React from 'react'

const Header = ({label}) => {
  return (
    <div className='font-bold text-3xl pt-6 font-mono  text-blue-700'>
        {label}
    </div>
  )
}

export default Header
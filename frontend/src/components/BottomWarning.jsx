import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label,buttonText,to}) => {
  return (
    <div className='flex w-full '>
        <p className='text-blue-600'>{label}</p>
        <Link to={to} className='pointer underline pl-1 cursor-pointer text-blue-400'>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning
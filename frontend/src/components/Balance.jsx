import React from 'react'

const Balance = ({value}) => {
  return (
    <div className='flex px-14 mt-10 font-bold text-2xl'>
     <div className='pr-5 '>Your balance</div>
      <div className='font-semibold'>Rs {value}</div>
    </div>
  )
}


export default Balance
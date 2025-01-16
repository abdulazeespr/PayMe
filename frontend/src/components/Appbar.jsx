import React from 'react'

const Appbar = () => {
  return (

    <div className='flex justify-between items-center border-black border-b-2 px-6 py-3 shadow-2xl bg-white'>
        <div className='font-mono font-bold text-2xl text-blue-700'>PayMe</div>
        <div className='flex justify-between items-center '>
            <div className='font-serif pt-[1.5px] text-blue-700'>Hello</div>
            <div className='bg-blue-400 w-10 h-10 flex justify-center items-center rounded-full ml-3 mr-2 font-bold text-xl text-black'>S</div>
        </div>
    </div>
  )
}

export default Appbar
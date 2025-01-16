import React from 'react'

const InputBox = ({label,placeholder,type}) => {
  return (
    <div className='flex flex-col'>
        <label className='font-bold text-sm  py-2  text-blue-600'>{label}</label>
        <input type={type} placeholder={placeholder} className='border-slate-200 border-[1.5px] rounded-sm px-3 w-full'/>
    </div>
  )
}

export default InputBox
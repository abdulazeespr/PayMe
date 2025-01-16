import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
  return (
    <div className='h-screen bg-blue-200 flex justify-center items-center'>
        <div className='w-max h-max bg-white rounded-lg  px-6 py-5 '>
        <Header label={"Sign Up"}/>
        <SubHeader label={"Enter Your infromation to create an account"}/>
        <InputBox label={"First Name"} placeholder={"John"}  type={"text"}/>
        <InputBox label={"Last Name"} placeholder={"Doe"} type={"text"}/>
        <InputBox label={"Email"} placeholder={"JohnDoe@gmail.com"} type={"email"}/>
        <InputBox label={"Password"} placeholder={"123456"} type={"password"}/>
        <Button label={"Sign up"}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
    </div>
  )
}

export default Signup
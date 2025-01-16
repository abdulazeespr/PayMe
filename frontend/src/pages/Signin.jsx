import React from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signin = () => {
  return (
    <div className='h-screen bg-blue-200 flex justify-center items-center'>
        <div className='w-max h-max bg-white rounded-lg  px-6 py-5 '>
        <Header label={"Sign In"}/>
        <SubHeader label={"Enter Your credentials to access your account"}/>
        <InputBox label={"Email"} placeholder={"JohnDoe@gmail.com"} type={"email"}/>
        <InputBox label={"Password"} placeholder={"123456"} type={"password"}/>
        <Button label={"Sign In"}/>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
        </div>
    </div>
  )
}

export default Signin
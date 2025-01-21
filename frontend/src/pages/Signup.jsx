import React, { useState } from 'react'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios' 
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [username, setUserName] = useState(""); 
  const [password,setPassword] = useState("");

  return (
    <div className='h-screen bg-blue-200 flex justify-center items-center'>
        <div className='w-max h-max bg-white rounded-lg  px-6 py-5 '>
        <Header label={"Sign Up"}/>
        <SubHeader label={"Enter Your infromation to create an account"}/>
        <InputBox
         onChange={e => {
           setFirstName(e.target.value)
        }} label={"First Name"} placeholder={"John"}  type={"text"}/>
        <InputBox 
         onChange={e => {
          setLastName(e.target.value)
         }}
        label={"Last Name"} placeholder={"Doe"} type={"text"}/>
        <InputBox 
         onChange={e => {
          setUserName(e.target.value)
         }}
        label={"Email"} placeholder={"JohnDoe@gmail.com"} type={"email"}/>
        <InputBox 
         onChange={e => {
          setPassword(e.target.value)
         }}
        label={"Password"} placeholder={"123456"} type={"password"}/>
        <Button label={"Sign up"} onClick={ async ()=>{
       const response = await axios.post(`http://localhost:3000/api/v1/user/signup`,
            {
              firstname,
              lastname,
              username,
              password
            }
           )
           console.log(response.data)
           localStorage.setItem("token",response.data.token)
           
           useNavigate("/dashboard")
        }}/>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
    </div>
  )
}

export default Signup
import React from 'react'
import Appbar from '../components/Appbar'
import  Balance  from "../components/Balance";
const Dashboard = () => {
  return (
    <div className="h-screen bg-blue-200 ">
      <Appbar/>
      <Balance  value={"10,000"}/>
    </div>
  )
}

export default Dashboard
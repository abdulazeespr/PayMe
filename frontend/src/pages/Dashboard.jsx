import React from 'react'
import Appbar from '../components/Appbar'
import  Balance  from "../components/Balance";
import UserList from '../components/UserList';
const Dashboard = () => {
  return (
    <div className="min-h-screen max-h-full  bg-blue-200  ">
      <Appbar/>
      <Balance  value={"10,000"}/>
      <UserList  className="h-full" />
      </div>
  )
}

export default Dashboard
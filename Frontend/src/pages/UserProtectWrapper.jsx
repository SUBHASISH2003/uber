//React functional component designed to act as a route guard or a protection wrapper for specific parts of your application

import React,{useContext, useEffect} from 'react'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


const UserProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')

    const navigate = useNavigate()

    useEffect(() => {
      if(!token) {
        navigate('/login')
      }
    },[token])



  
  
  return (
    <>
     {children}
    </>
  )
}

export default UserProtectWrapper
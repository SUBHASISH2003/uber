//React functional component designed to act as a route guard or a protection wrapper for specific parts of your application

import React,{useContext, useEffect, useState} from 'react'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UserProtectWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      if(!token) {
        navigate('/login')
      }
    },[token])
    

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers: {
          Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.status === 200) { //Check Response Status
          setUser(response.data.user)
          setIsLoading(false)
          
      }
    })
      .catch(err =>{
          console.log(err)
          navigate('/login')
      })

         

  if(isLoading) {
      return(
          <div>Loading...</div>
      )
  }



  
  
  return (
    <>
     {children}
    </>
  )
}

export default UserProtectWrapper
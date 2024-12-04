import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const token = localStorage.getItem('token') //Retrieves the token stored in the browser's localStorage.

    const navigate = useNavigate()

    //This ensures the code works across environments
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) { //Check Response Status
            localStorage.removeItem('token') //Deletes the token from localStorage, effectively "logging out" the user
            navigate('/login')
        }
    })


  return (
    <div>UserLogout</div>
  )
}

export default UserLogout
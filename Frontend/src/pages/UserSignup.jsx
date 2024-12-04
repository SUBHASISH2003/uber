import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'


const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserDataContext) 

  const submitHandler = async (e)=>{
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if (response.status === 201) {
      const data = response.data

      setUser(data.user)
      localStorage.setItem('token', data.token)

      navigate('/home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')

  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>

      <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>


       <h3 className=' text-lg font-medium mb-2'>Whats Your Full Name </h3>
        <div className='flex gap-4 mb-7'>

          <input
           required
           className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
           type="text" 
           placeholder='first name' 
           value={firstName}
           onChange={(e)=> {
            setFirstName(e.target.value)
           }}
          />

          <input
           required
           className=' bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
           type="text" 
           placeholder='last name'
           value={lastName}
           onChange={(e)=> {
            setLastName(e.target.value)
           }}
          />
        </div> 


        <h3 className=' text-lg font-medium mb-2'>Whats Your Email !</h3>
       <input
         required
         className=' bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="email" 
         placeholder='enter your email address here' 
         value={email}
           onChange={(e)=> {
            setEmail(e.target.value)
           }}
        />

        <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>

       <input 
         required
         className=' bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         type="password" 
         placeholder='enter your password here' 
         value={password}
           onChange={(e)=> {
            setPassword(e.target.value)
           }}
        />
       <button
         className=' bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-base placeholder:text-sm'
        >Sign Up</button>

      </form>

      <p className=' text-center'>Registered Already? <Link to='/login' className=' text-blue-600'>Login here</Link> </p>

    </div>
   
  </div>
  )
}

export default UserSignup
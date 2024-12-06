import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainLogin = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState({})

  const navigate = useNavigate()
  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData ={
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)

      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')

  }





  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>

        <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <h3 className=' text-lg font-medium mb-2'>Whats Your Email Captain!!</h3>
         <input
           required
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
           type="email" 
           placeholder='enter your email address here' 
          />

          <h3 className=' text-lg font-medium mb-2'>Enter Password</h3>

         <input 
           required
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           className=' bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
           type="password" 
           placeholder='enter your password here' 
          />
         <button
           className=' bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'
          >Login</button>

        </form>

        <p className=' text-center'>New captain? <Link to='/captain-signup' className=' text-blue-600'>Create new Account</Link> </p>

      </div>
      <div>
        <Link
         to={'/login'}
         className=' flex items-center justify-center bg-[orange] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
         >Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {CaptainDataContext} from '../context/CaptainContext'

const CaptainSignup = () => {

  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [captainData, setCaptainData] = useState({})

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  
  const navigate = useNavigate()
  const {captain, setCaptain} = React.useContext(CaptainDataContext)

  const submitHandler = async (e)=>{
    e.preventDefault();
    const captainData= {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if (response.status === 201) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)

      navigate('/captain-home')
    }

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>

      <img className='w-20 mb-4' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

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

        <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
          <div className='grid grid-cols-2 gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text" 
              placeholder='vehicle color'
              value={vehicleColor}
              onChange={(e) =>{ setVehicleColor(e.target.value)}}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
              type="text" 
              placeholder='vehicle plate'
              value={vehiclePlate}
              onChange={(e) => {setVehiclePlate(e.target.value)}}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base'
              type="number" 
              placeholder='vehicle capacity'
              value={vehicleCapacity}
              onChange={(e) => {setVehicleCapacity(e.target.value)}}
            />
            <select
                required
                className='bg-[#eeeeee] rounded px-4 py-2 border text-lg'
                value={vehicleType}
                onChange={(e) => {setVehicleType(e.target.value)}}
              >
                <option value="">Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
          </div>
       <button
         className=' bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-base placeholder:text-sm'
        >Sign Up Captain</button>

      </form>

      <p className=' text-center'>Registered Already Captain? <Link to='/captain-login' className=' text-blue-600'>Login here </Link> </p>

    </div>
  </div>
  )
}

export default CaptainSignup
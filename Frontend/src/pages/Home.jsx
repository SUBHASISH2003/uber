import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)



  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
   if(vehiclePanel){
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[vehiclePanel])

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
   if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confirmRidePanelRef.current,{
      transform:'translateY(100%)'
    })
  }
  },[confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
     gsap.to(vehicleFoundRef.current,{
       transform:'translateY(0)'
     })
   }else{
     gsap.to(vehicleFoundRef.current,{
       transform:'translateY(100%)'
     })
   }
   },[vehicleFound])



  return (
    <div className=' h-screen overflow-hidden relative'>
      <img className='w-20 absolute mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div onClick={()=>{
        setVehiclePanel(false)
      }} className=' h-screen w-screen'>
        <img className=' h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
       <div className='h-[30%] p-5 bg-white relative'>
        <h4 ref={panelCloseRef}
        onClick={()=>{
          setPanelOpen(false)
        }}
        className=' absolute opacity-0 top-0 right-3 text-2xl'
        >
          <i className="ri-arrow-down-double-line"></i>
        </h4>
       <h4 className=' text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 rounded-full bg-gray-700"></div>
          <input 
          onClick={()=>{
            setPanelOpen(true)
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value)
          }}
          className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'  
          type="text" 
          placeholder='Add a pickup location' 
          />
          <input 
           onClick={()=>{
            setPanelOpen(true)
          }}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value)
          }}
          className=' bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'  
          type="text" 
          placeholder='Enter your Destination' />
        </form> 
       </div>
       <div ref={panelRef} className=' bg-white h-0'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

       </div>

      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
       <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
       </div>
       <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
       <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
       </div>
       <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}  />
       </div>
       <div  className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <WaitingForDriver />
       </div>
       
    </div>
  )
}

export default Home
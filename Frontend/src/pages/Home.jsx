import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)



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



  return (
    <div className=' h-screen overflow-hidden relative'>
      <img className='w-20 absolute mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className=' h-screen w-screen'>
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
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <div className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486181k3is7.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>UberGo <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable compact rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
        <div className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>Moto <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable Motorcycle rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
        <div className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable Auto rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
        
       
        
      </div>
    </div>
  )
}

export default Home
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
        props.setVehiclePanel(false)
      }}
      className=' absolute p-1 w-[93%] text-center  top-0'><i className="ri-arrow-down-double-line text-3xl text-gray-400"></i></h5>
       <h3 className=' text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} 
        className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486181k3is7.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>UberGo <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable compact rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} 
        className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>Moto <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable Motorcycle rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
        }} 
        className=' flex border-2 rounded-xl active:border-black mb-2 w-full p-3  items-center justify-between'>
          <img className=' h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' ml-2 w-1/2'>
            <h4 className=' font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i></span>4</h4>
            <h5 className=' font-medium text-sm'>2 min away</h5>
            <p className=' font-normal text-gray-600 text-xs'>Affordable Auto rides</p>
          </div>
          <h2 className=' text-lg font-semibold'>₹222.00</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
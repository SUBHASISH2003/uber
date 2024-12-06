import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
        props.setConfirmRidePanel(false)
      }}
      className=' absolute p-1 w-[93%] text-center  top-0'><i className="ri-arrow-down-double-line text-3xl text-gray-400"></i></h5>
        <h3 className=' text-2xl font-semibold mb-5'>Confirm your Ride</h3>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <img className=' h-20' src="https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486181k3is7.png" alt="" />
            <div className=' w-full mt-5'>
                <div className=' flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-2-fill text-lg"></i>
                <div>
                    <h3 className='text-lg font-medium'>342/22:A</h3>
                    <p className='text-sm -mt-1 text-gray-700'>Kalyani,Kolkata</p>
                </div>
                </div>
                <div className=' flex items-center gap-5 p-3 border-b-2'>
                <i className="ri-map-pin-user-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>342/22:A</h3>
                    <p className='text-sm -mt-1 text-gray-700'>Kalyani,Kolkata</p>
                </div>
                </div>
                <div className=' flex items-center gap-5 p-3 '>
                <i className="ri-cash-line"></i>
                <div>
                    <h3 className='text-lg font-medium'>₹193.20</h3>
                    <p className='text-sm -mt-1 text-gray-700'>cash cash</p>
                </div>
                </div>

            </div>

            <button onClick={()=>{
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
            }}
            className=' w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
                Confirm
            </button>

        </div>

    </div>
  )
}

export default ConfirmRide
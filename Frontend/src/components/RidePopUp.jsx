import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'


const RidePopUp = (props) => {
    const { captain } = useContext(CaptainDataContext)


    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Alert.. {captain.fullname.firstname }!</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3 '>
                    <img className='h-12 rounded-full object-cover w-12' src="https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                {/* <h5 className='text-lg font-semibold'>2.2 KM</h5> */}
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            
                            <p className='text-base -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            
                            <p className='text-base -mt-1 text-gray-600'>{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
                            
                        </div>
                    </div>
                </div>
                <div className='mt-5 w-full '>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()

                    }} className=' bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>

                    <button onClick={() => {
                        props.setRidePopupPanel(false)

                    }} className='mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg'>Ignore</button>


                </div>
            </div>
        </div>
    )
}

export default RidePopUp

import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'

const CaptainDetails = () => {



    const { captain } = useContext(CaptainDataContext)

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full border-2 object-cover' 
                     src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png" alt="" 
                    />
                    <h4 className='text-lg text-white font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                    


                </div>           
            </div>

            <div className=' bg-green-500 flex items-center justify-center rounded-lg mt-5 p-2 '>
                <h4 className='text-white font-semibold'>
                     Wait For a Rides
                </h4>
            </div>


            {/* <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>

            </div> */}
        </div>
    )
}

export default CaptainDetails
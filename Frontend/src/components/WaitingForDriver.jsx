import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
    props.WaitingForDriver(false)
  }}
  className=' absolute p-1 w-[93%] text-center  top-0'>
    <i className="ri-arrow-down-double-line text-3xl text-gray-400">
      </i>
    </h5>
    <div className='flex items-center justify-between'>
    <img className=' h-12' src="https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486181k3is7.png" alt="" />
    <div className=' text-right'>
      <h2 className=' text-lg font-medium'>Subhasish</h2>
      <h4 className=' text-xl font-semibold -mt-1 -mb-1'>WB 34 930</h4>
      <p className=' text-sm text-gray-800'>Maruti Suzuki Alto</p>
    </div>

    </div>
    

    <div className='flex gap-2 justify-between flex-col items-center'>
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

       
    </div>

</div>
  )
}

export default WaitingForDriver
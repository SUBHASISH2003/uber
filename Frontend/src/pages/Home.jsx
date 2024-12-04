import React from 'react'

const Home = () => {
  return (
    <div className=' h-screen relative'>
      <img className='w-20 absolute mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className=' h-screen w-screen'>
        <img className=' h-full w-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABLUH3RR9WY4ogN9jIsbV0QTaQWXDvEWW1A&s" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full '>
       <div className='h-[30%] p-5 bg-white'>
       <h4 className=' text-2xl font-semibold'>Find a Trip</h4>
        <form>
          <input className=' bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'  type="text" placeholder='Add a pickup location' />
          <input className=' bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'  type="text" placeholder='Enter your Destination' />
        </form> 
       </div>
       <div className=' h-[70%] bg-red-500 p-5 h-0'>

       </div>

      </div>
    </div>
  )
}

export default Home
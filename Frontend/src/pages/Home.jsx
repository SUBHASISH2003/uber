import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='h-screen bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 flex justify-between flex-col w-full'>
            <img className='w-20 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 px-4 py-4'>
                <h2 className=' text-3xl font-bold'>Get Started with Uber</h2>
                <Link to={'/login'} className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home
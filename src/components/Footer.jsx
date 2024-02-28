import React from 'react'
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <div className='flex justify-around items-center flex-col md:flex-row bottom-0 w-full h-28 bg-gradiente'>
        <img className='h-16' src={logo1} alt="" />
        <h1 className='font-inco text-xs md:text-xs'>© 2024 All Rights Reserved -- Through My Eyes</h1>
    </div>
  )
}

export default Footer
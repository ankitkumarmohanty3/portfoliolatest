import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='bg-purple-50 pt-20'>
      <div className='flex flex-col items-center gap-6 py-5 pb-10 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8'>
        
        <div className='text-3xl font-syne font-bold'>
          {"Ankit"}<span className='text-blue-500'>T</span>{""}
        </div>

        <ul className='flex flex-wrap font-poppins justify-center gap-4 sm:gap-6 text-gray-500 font-[Inter] text-sm cursor-pointer'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </ul>

        <div className='text-center text-sm text-gray-500'>
          © 2026 Ankit Kumar Mohanty. All rights reserved.
        </div>

      </div>
    </div>
  )
}

export default Footer;  
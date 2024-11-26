import React from 'react'
import { assets } from '../assests/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate=useNavigate()

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div className='mb-5 w-40'>
            <img src={assets.logo}></img>
            <p className='w-full text-gray-600 leading-6'>Create dummy text instantly with the Lorem Ipsum Dummy Text Generator! Fully customizable placeholder text for your designs, websites, and more—quick, easy, and professional!</p>

        </div>
        {/* center section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            
          </ul>

        </div>
        {/* right section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9310250XXX</li>
            <li>imyashdixit001@gmail.com</li>
          </ul>


        </div>
      </div>
      <div>
        {/* copyright section */}
        <p className='text-center text-sm py-5'> 2024 All rights reserved. Created by <a href='#'>Yash Dixit</a></p>
      </div>
    </div>
  )
}

export default Footer

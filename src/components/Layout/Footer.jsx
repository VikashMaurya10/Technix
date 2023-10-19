import React from 'react'
import logo from "../../assets/logo/footer-logo.png"
const Footer = () => {
  return (
    <footer className='bg-[#040e1c] text-white py-16'>
      <div className='w-[90%] mx-auto'>
        <img className="mb-4" src={logo} alt="loading..." />
        <hr />
        <div className='flex justify-between mt-4 text-xs'>
          <p>&copy; Copyright <span className='text-cyan'>&copy; 2023 </span>
            Themepure. All Right Reserved
          </p>
          <div className='flex gap-8'>
            <p>Terms and Conditions</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo/logo.png"

const Header = () => {
    return (
        <header className='font-robo'>
            <nav className='w-[80%] mx-auto py-4 flex justify-between items-center'>
                <NavLink>
                    <img src={logo} alt="Logo" />
                </NavLink>
                <button className='relative capitalize py-4 px-10 bg-darkblue text-white after:absolute after:w-[1.2rem] after:h-[1.2rem] after:bg-cyan after:right-0 after:bottom-0 after:content-[""] after:rounded-tl-lg'>get started today</button>
            </nav>
        </header>
    )
}

export default Header
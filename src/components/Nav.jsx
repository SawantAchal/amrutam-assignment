import React, { useState } from 'react'
import { LuPhone } from "react-icons/lu"
import logo from '../assets/logo.png'
import nav1 from '../assets/nav1.png'
import nav2 from '../assets/nav2.png'
import nav3 from '../assets/nav3.png'
import nav4 from '../assets/nav4.png'
import { RiArrowDropDownLine } from "react-icons/ri"

const Nav = () => {
  const [activeLink, setActiveLink] = useState('Shop')

  const navLinks = [
    'Home',
    'Find Doctors',
    'Lab Tests',
    'Shop',
    'Forum',
    'About Us',
  ]

  return (
    <nav className="bg-[#FFF7E2] text-[#3A643C] h-[147px]">
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-between py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center gap-2 text-[14px]">
            <LuPhone className="text-[18px]" />
            <span>+91 9826352321</span>
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-52 h-10" />
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-center">
          <div className="flex justify-center gap-10 text-[16px] font-medium">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`
                  pb-1 transition-all
                  ${activeLink === link
                    ? 'border-b-[3px] border-[#3A643C] font-semibold'
                    : 'border-b-[3px] border-transparent hover:border-[#3A643C]/40'}
                `}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 pr-4">
            <div className="relative">
              <span className="h-9 w-9 rounded-full bg-[#D2D9D2] flex items-center justify-center">
                <img src={nav2} alt="" className="h-6 w-6" />
              </span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#3A643C] text-white text-[10px] flex items-center justify-center">
                ₹2
              </span>
            </div>
            <div className="relative">
              <span className="h-9 w-9 rounded-full bg-[#D2D9D2] flex items-center justify-center">
                <img src={nav1} alt="" className="h-6 w-6" />
              </span>
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#3A643C] text-white text-[10px] flex items-center justify-center">
                1
              </span>
            </div>
            <span className="h-9 w-9 rounded-full bg-[#D2D9D2] flex items-center justify-center">
              <img src={nav4} alt="" className="h-6 w-6" />
            </span>
            <span className="h-9 w-9 rounded-full bg-[#D2D9D2] flex items-center justify-center">
              <img src={nav3} alt="" className="h-6 w-6" />
            </span>
            <RiArrowDropDownLine className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

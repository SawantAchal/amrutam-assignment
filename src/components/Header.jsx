import React from 'react'
import backgroundImg from '../assets/header-bg.png'
import { CiSearch } from "react-icons/ci"
import bag_icon from '../assets/bag-icon.png'

const Header = () => {
  return (
    <>
      <header className="relative h-[202px] w-full">
        <img src={backgroundImg} alt="header background" className="h-full w-full object-cover"/>
        <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-[22px] font-semibold text-[#2F3E2F]">
          Store
        </h1>
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="flex items-center bg-white rounded-xl px-4 h-12 w-[539px] shadow-sm">
            <CiSearch className="text-[#2E2F2E] text-xl" />
            <input type="search" placeholder="Search for Kuntal Care" className="ml-2 w-full outline-none text-sm"/>
          </div>
          <div className="h-12 w-[50px] bg-white rounded-[7px] flex items-center justify-center shadow-sm">
            <img src={bag_icon} alt="bag" className="h-8 w-8" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

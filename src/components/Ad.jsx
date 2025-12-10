import React from 'react'
import { FaPhone } from "react-icons/fa6";

const Ad = () => {
  return (
    <>
      <div className="relative bg-[#373636] h-[67px] flex items-center">
        <p className="absolute left-1/2 -translate-x-1/2 text-[#D9D9D9] text-lg">Your first 5 minutes instant call is free.</p>
        <div className="ml-auto pr-6">
          <button className="bg-[#3A643B] text-white text-center justify-center flex items-center gap-2 font-semibold px-6  h-[51px]  w-[355px] rounded-2xl">
            <FaPhone className="text-sm" /><span>Try Instant Free Call Now</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Ad
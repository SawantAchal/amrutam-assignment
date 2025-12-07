import React from 'react'
import { FaStar } from "react-icons/fa";
import { meetOurExpertsData } from '../data/MeetOurExpertData';

const MeetOurExpertCard = () => {
  return (
    <>
      {
        meetOurExpertsData.map((data) => (
          <div key={data.id} className="w-[295px] h-[446px] bg-[#FFF7E2] rounded-[40px] flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col items-center pt-10 px-6 text-center relative">
              <div className="relative">
                <img src={data.profileImage} alt="Profile image" className="w-[149px] h-[149px] rounded-full object-cover"/>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2  bg-black text-white text-sm px-3 py-0.5 rounded-full flex items-center gap-1">
                  <span className="font-medium">{data.rating}</span>
                  <FaStar className="text-yellow-400 text-xs" />
                </div>
              </div>
              <h3 className="mt-8 text-[20px] font-semibold text-black">{data.name}</h3>
              <p className="mt-1 text-[16px] text-[#6B6B6B]">{data.qualification}</p>
              <p className="mt-2 flex items-center gap-1 text-[#3A643B] text-[16px]">🎓 {data.experienceYears} years of experience</p>
              <span className="mt-4 px-5 py-2 rounded-full  bg-[#3A643B1F] text-[#3A643B] text-[16px]">🔗{data.speciality}</span>
            </div>
            <button className="h-[65px] w-full bg-[#3A643B] text-white text-[18px] font-medium rounded-b-[40px]">Book a session</button>
          </div>
        ))
      }
    </>
  )
}

export default MeetOurExpertCard

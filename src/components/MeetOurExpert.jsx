import React from "react"
import MeetOurExpertCard from "./MeetOurExpertCard"
import SideArrow from "../assets/SideArrow.png"


const MeetOurExpert = () => {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h3 className="text-center font-medium text-2xl mb-12"> Meet our Experts</h3>
          <div className="flex items-center gap-8">
            <button className="h-12 w-12 rounded-full border border-[#E2E5E2] flex items-center justify-center">
              <img src={SideArrow} alt="previous" className="w-5 rotate-180" />
            </button>
            <div className="flex gap-8">
              <MeetOurExpertCard  />
            </div>
            <button className="h-12 w-12 rounded-full border border-[#E2E5E2] flex items-center justify-center">
              <img src={SideArrow} alt="next" className="w-5" />
            </button>
          </div>
          <div className="flex gap-2 mt-8">
            <span className="h-2 w-2 rounded-full bg-[#3A643B]" />
            <span className="h-2 w-2 rounded-full bg-[#D0D4D0]" />
            <span className="h-2 w-2 rounded-full bg-[#D0D4D0]" />
          </div>
          <button className="w-[276px] h-[62px] mt-8 px-8 py-3 rounded-[7px] border border-[#3A643B] text-[#3A643B] text-[24px]    flex items-center text-center gap-2.5">
            Find more experts
            <span className="text-2xl">›</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default MeetOurExpert

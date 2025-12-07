import React from 'react'
import { FaStar } from "react-icons/fa";

const ReviewsAndRating = () => {
  return (
    <>
        <section className="bg-[#FFF6E3] py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-medium text-center flex-1">Reviews and Ratings</h2>
                </div>
                <div className='flex justify-between'>
                    <div className="bg-[#FDEAD2] rounded-xl mb-8 w-[328px] h-[124px]">
                        <div className=" p-6 flex w-[195px] gap-2">
                            <div className="text-3xl font-semibold">5.0</div>
                            <div>
                                <div className="flex items-center gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-[#F4B000] text-sm" />
                                    ))}
                                </div>
                                <p className="text-xs text-[#2E2F2E] mt-2"> Based on 20 reviews </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 drop-shadow-2xl rounded-[7px] text-sm bg-[#FFF7E2] w-[181px] h-[58px] text-[#3A643B] text-[16px]"> See More Reviews </button>
                        <button className="px-4 py-2 drop-shadow-2xl rounded-[7px] text-sm bg-[#FFF7E2] w-[181px] h-[58px] text-[#3A643B] text-[16px]"> Write a review </button>
                    </div>
                </div>
                <div className="space-y-4 pt-5">
                    <div  className="bg-[#FFEED8] rounded-xl p-4 flex justify-between items-start">
                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs font-semibold"> SJ </div>
                            <div>
                                <p className="text-sm text-[#2E2F2E] ">
                                    Might be bit early to confirm but yes I can see noticeable
                                    difference in my hairfall. will write again after using it
                                    for longer periods
                                </p>
                                <div className='flex items-center gap-3 align-middle'>
                                    <p className="text-xs text-gray-500 mt-2 ">
                                        Sabarimathi . 20 January 2023 .
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-[#F4B000] text-xs" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 pt-5">
                    <div  className="bg-[#FFEED8] rounded-xl p-4 flex justify-between items-start">
                        <div className="flex gap-4">
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs font-semibold"> SJ </div>
                            <div>
                                <p className="text-sm text-[#2E2F2E] ">
                                    Might be bit early to confirm but yes I can see noticeable
                                    difference in my hairfall. will write again after using it
                                    for longer periods
                                </p>
                                <div className='flex items-center gap-3 align-middle'>
                                    <p className="text-xs text-gray-500 mt-2 ">
                                        Sabarimathi . 20 January 2023 .
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-[#F4B000] text-xs" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReviewsAndRating

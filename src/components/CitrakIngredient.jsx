import React from 'react'
import { FiPlus, FiChevronLeft } from "react-icons/fi"
import {ingredientData  } from "../data/IngredientData.js"

const CitrakIngredient = () => {
    const citrakIn = ingredientData[1]
  return (
    <>
      <main className="bg-[#FFF7E2] min-h-screen px-16 py-10">
        <button onClick={() => navigate(-1)}  className=" cursor-pointer inline-flex items-center gap-2 px-4 py-2 mb-8 text-[16px] text-[#3A643B] leading-9 border border-[#3A643B]  rounded-lg ">
          <FiChevronLeft className="text-[16px]" />
          Back
        </button>
        <div className='flex justify-between py-7 px-12 gap-6'>
          <div className='w-[503px] h-[503px] bg-[#FFE9CB] rounded-lg'>
            <img src={citrakIn.image} alt='citrak image' className='w-full h-full'/>
          </div>
          <div className='flex flex-col gap-6'>
            <div>
              <h3 className='text-[40px] font-bold text-[#161616]'>{citrakIn.name} - {citrakIn.botanical_name}</h3>
              <h3 className='text-[40px] font-bold  text-[#161616]'>(Sanskrit -{citrakIn.sanskrit_name})</h3>
              <p className='text-[24px] leading-9'>{citrakIn.description}</p>
            </div>
            <div className="w-[713px] h-[223px] bg-[#FFF4DC] px-5 py-4">
              <h3 className="text-[24px] font-semibold mb-3">Why Chitrak ?</h3>
              <div className="space-y-2">
                {
                  citrakIn.why_citrak.map((data, i) => (
                    <div key={i} className="flex items-start gap-3 text-[12px] leading-[18px]">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#C7E9C0] border border-[#79B27A]">
                        <span className="text-[14px]">✓</span>
                      </div>
                      <p className="text-[#3A3A3A] text-[20px]">{data}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-[713px] h-[281px]">
              <h3 className="text-[24px] font-semibold text-[#1D1D1D] mb-6"> Prakriti Impact</h3>
              <div className="flex items-start justify-between px-6">
                <div className="flex flex-col items-center w-[187px] h-[226px]">
                    <div className="relative w-32 h-32 rounded-full bg-[#EFE7CF] flex items-center justify-center">
                      <div className="absolute inset-0 rotate-180 rounded-full border-10 border-[#3B82F6] border-t-transparent" />
                      <span className="text-[#3B82F6] text-lg font-semibold">🌀</span>
                    </div>
                    <p className="text-[12px] mt-3 text-[#1D1D1D] font-medium">
                      Vata Balanced
                    </p>
                </div>
                <div className="flex flex-col items-center  w-[187px] h-[226px]">
                  <div className="relative w-32 h-32 rounded-full bg-[#EFE7CF] flex items-center justify-center">
                    <div className="absolute inset-0 rotate-180 rounded-full border-10 border-[#3A7D44] border-t-transparent" />
                    <span className="text-[#3A7D44] text-lg">🍃</span>
                  </div>
                  <p className="text-[12px] mt-3 text-[#1D1D1D] font-medium">
                    Kapha Balanced
                  </p>
                </div>
                <div className="flex flex-col items-center  w-[187px] h-[226px]">
                    <div className="relative w-32 h-32 rounded-full bg-[#EFE7CF] flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-10 border-[#F2994A] border-t-transparent" />
                      <span className="text-[#F2994A] text-lg">🔥</span>
                    </div>
                    <p className="text-[12px] mt-3 text-[#1D1D1D] font-medium">
                      Pitta Unbalanced
                    </p>
                </div>
              </div>
            </div>
            <div className="w-[713px] h-[723px] bg-[#FFF4DC] px-5 py-4">
              <h3 className="text-[24px] font-bold mb-4">Benefits</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {
                  citrakIn.benefits.map((data, i) => (
                    <div key={i} className="h-40">
                      <div className="bg-[#FFE9CB] w-[336.5px] h-40 rounded-md px-4 py-3  gap-3">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-md bg-[#FFE0B5]">
                          <span className="text-[18px]">
                            {i === 0 && "🧘"}
                            {i === 1 && "⚖️"}
                            {i === 2 && "💧"}
                            {i === 3 && "🩺"}
                            {i === 4 && "🍽️"}
                            {i === 5 && "🌬️"}
                            {i === 6 && "🩹"}
                            {i === 7 && "⚖️"}
                            {i === 8 && "🌿"}
                          </span>
                        </div>
                        <p className="text-[20px] pt-5 leading-[18px] font-semibold text-[#000000]">
                          {data}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-[713px] h-[277px] bg-[#FFF4DC] px-6 py-4 mt-6">
              <p className="text-[24px] font-bold mb-5"> Ayurvedic Properties</p>
              <div className="grid grid-cols-4 gap-8">
                {
                  citrakIn.ayurvedic_properties.map((data, index) => (
                    <div key={index} className="flex flex-col items-center text-center h-[222px]">
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img src={data.icon || ""} alt={data.name} className="w-8 h-8 object-contain"/>
                      </div>
                      <p className="text-[20px] font-bold text-[#161616] mb-1"> {data.name}</p>
                      <p className="text-[20px] font-normal text-[#161616] leading-4">{data.value}</p>
                      <p className="text-[13px] text-[#161616] leading-4 mt-1"> {data.description} </p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-[713px] h-[141px] bg-[#FFF4DC] px-6 py-4">
              <p className="text-[24px] font-bold mb-4 text-[#161616]"> Important formulations</p>
              <div className="flex justify-between items-center">
                {
                  citrakIn.important_formulations.map((data, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className=" mb-2 flex items-center flex-col justify-center w-[169px] h-[90px]">
                        <img src={data.icon || ""} alt={data.name} className="w-12 h-12 object-contain"/>
                        <p className="text-[20px] text-[#3A3A3A] leading-4 w-full">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-[713px] h-[180px] bg-[#FFF4DC] px-6 py-4">
              <p className="text-[24px] font-bold mb-4"> Therapeutic uses</p>
              <div className="flex justify-between items-start">
                {
                  citrakIn.therapeutic_uses.map((data, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-[142px] h-[38px]">
                      <div className="w-[84px] h-[84px] rounded-full  border-[6px] border-[#E5EFE2] flex items-center justify-center mb-2">
                        <img src={data.icon || ""} alt={data.name} className="w-16 h-16 object-contain"/>
                      </div>
                      <p className="text-[20px] text-[#161616] leading-4">
                        {data.name}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='"w-[713px] h-[166px] bg-[#FFF4DC] px-6 py-4'>
              <p className="text-[24px] font-bold mb-4">Plant parts and its purpose</p>
              <div className="flex justify-between">
                {
                  citrakIn.plant_part_used.map((data) => (
                    <div className="flex flex-col items-center text-center w-[212px] h-[117px]">
                      <img src='' alt={data.name} className="w-10 h-10 object-conta"/>
                      <h5  className="text-[16px] font-medium text-[#00000] mb-1">{data.name}</h5>
                      <p className="text-[15px] text-[#595959] leading-4">{data.purpose}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="w-[713px] h-[72px] bg-[#FFF4DC] px-6 py-3">
              <p className="text-[24px] font-bold mb-1"> Best combined with</p>
              <p className="text-[20px] text-[#00000] font-medium leading-5">
                {citrakIn.best_combined_with.join(", ")}
              </p>
            </div>
            <div className="w-[713px] h-[101px] bg-[#FFF4DC] px-6 py-4">
              <p className="text-[24px] font-bold mb-2">Geographical locations</p>
              <div className="flex items-start gap-2 text-[20px] text-[#00000] leading-5">
                <span>📍</span>
                <p>{citrakIn.geographical_locations}.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default CitrakIngredient
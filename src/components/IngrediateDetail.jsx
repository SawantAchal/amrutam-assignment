import React from "react"
import { gokhruData } from "../data/GokhruData.js"
import { FiPlus, FiChevronLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const IngrediateDetail = () => {
  const ingredient = gokhruData
 const navigate = useNavigate()  
 
  return (
    <>
      <main className="bg-[#FFF7E2] min-h-screen px-16 py-10">
        <button onClick={() => navigate(-1)}  className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[16px] text-[#3A643B] leading-9 border border-[#3A643B]  rounded-lg ">
          <FiChevronLeft className="text-[16px]" />
          Back
        </button>
        <div className="flex justify-between ">
          <div className="w-[606px]">
            <div className="flex items-center justify-center w-[375px] h-[375px] border border-[#A9A9A9] rounded-xl  mb-6">
              <img src={ingredient.image} alt={ingredient.name} className="h-[280px] w-[280px] object-contain"/>
            </div>
            <h2 className="text-[36px] font-semibold leading-9 text-[#0C0C0C] mb-2">{ingredient.name}</h2>
            <p className="text-[18px] wrap-break-word leading-8 text-[#2E2F2E] w-[589px] h-[88px]">{ingredient.longDescription}</p>
          </div>
          <div className="flex-1">
            <h3 className="text-[24px] font-semibold leading-7 text-[#2E2F2E] mb-6">{ingredient.productsTitle}</h3>
            <div className="space-y-4">
              {ingredient.products.map((product) => (
                <div key={product.id} className="w-[555px] h-[246px] flex items-center gap-4 rounded-2xl ">
                  <div>
                    <img src={product.image} alt={product.title} className="w-[246px] h-[246px] rounded-2xl object-cover"/>
                  </div>
                  <div className="flex flex-col justify-between h-full py-6 pr-6 flex-1">
                    <section className="space-y-2">
                      <p className="text-[18px] font-medium leading-[29px] text-[#2E2F2E]"> {product.title}</p>
                      <p className="text-[16px] font-medium text-[#2E2F2E] leading-4"> ₹{product.price}</p>
                    </section>
                    <button className="self-end h-7 w-7  rounded[4px] bg-[#3A643B] flex items-center justify-center text-white text-xs">
                      <FiPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default IngrediateDetail

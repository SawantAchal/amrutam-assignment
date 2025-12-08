import React from 'react'
import { summarCollectionData } from '../data/SummarCollectionData'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { useParams, useNavigate  } from 'react-router-dom'
import reviewVideoImage from '../assets/reviewVideoImage.png'
import ReviewsAndRating from './ReviewsAndRating'

const ProductDetailed = () => {
  const { id } = useParams()
  const navigate = useNavigate() 

  // const firstProduct = summarCollectionData[0]
  const product =
    summarCollectionData.find((p) => p.id === Number(id)) ||
    summarCollectionData[0] // fallback
  if (!product) return null
  
  const StarRating = ({ rating, max = 5 }) => {
    const stars = []

    for (let i = 1; i <= max; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-[#F4B000] text-xs" />)
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-[#F4B000] text-xs" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-[#F4B000] text-xs" />)
      }
    }
    return <div className="flex items-center gap-0.5">{stars}</div>
  }

  return (
    <>
      <main className="bg-[#FFF7E2] flex justify-center py-10">
        <div className="max-w-6xl w-full flex gap-10">
          <section className="w-[50%]">
            <div className="rounded-2xl overflow-hidden">
              <img src={product.image} alt="product" className="h-[636px] w-[636px] object-cover"/>
            </div>
            <div className="flex gap-3 pt-3">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-[191px] h-[191px] rounded-2xl overflow-hidden border border-[#E4D4BD]">
                  <img src={product.image} alt="product thumb" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </section>
          <section className="w-[50%] space-y-6 text-sm text-[#2E2F2E]">
            <div className="space-y-2">
              <p className="text-[18px] font-medium leading-snug"> {product.title}</p>
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-xs text-[#777]">({product.reviewsCount}{' '}reviews)</span>
              </div>
              <p className="text-[#3A643C] font-semibold text-[18px]"> ₹{product.price}</p>
            </div>
            <div className="flex items-center gap-3 w-[277px] h-9">
              <div className="flex items-center gap-2 text-[11px]  rounded px-2 py-1">
                {product.sizes?.map((s, idx) => (
                  <button key={idx}className={`px-3 rounded-[12px] border border-[#9DB29D] text-xs h-[36px] w-[82px] bg-[#EAF2EA]`}>{s}</button>
                ))}
              </div>
              {product.packOptions?.map((p, idx) => (
                <button key={idx} className={`px-3 rounded-sm  text-xs w-[97px] h-9 bg-[#FAFAFA]`}>{p}</button>
              ))}
            </div>
            {/* Qty + Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-between w-[306px] h-[58px] border border-[#676767] rounded-xl px-4 text-sm">
                <button className='text-2xl'>-</button>
                <span>1</span>
                <button className='text-2xl'>+</button>
              </div>
              <button className="w-[306px] h-[58px] rounded-xl bg-[#3A643B] text-white text-sm font-medium">
                Add to cart
              </button>
            </div>
            <div className="w-[606px] max-w-full text-[18px] linh leading-8 text-[#2E2F2E]">
              {product.longDescription}
            </div>
            <div className="space-y-2">
              <h3 className="text-[20px] font-semibold text-[#2E2F2E]">Product Highlights</h3>
              <div className="grid grid-cols-4 gap-3 w-[638px] h-[204px]">
                {product.productHighlights?.map((pro, idx) => (
                  <div key={idx} className="bg-[#FDEAD2] rounded-xl font-bold px-3 py-3 text-[14px] text-[#2E2F2E] leading-snug w-[149px] h-[204px] flex items-end">
                    <p>{pro}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[20px]">
                <p className="font-bold">Key Ingredients</p>
                <button className="text-[#3A643B] font-semibold text-[16px]">
                  View all ingredients
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {product.keyIngredients?.map((ing, idx) => (
                  <div key={idx} onClick={() => navigate('/ingredient')} className="bg-[#FDEAD2] rounded-xl px-3 py-2 grid grid-cols-[48px_1fr_16px] items-center gap-2 text-[10px] w-[293px] h-[94px] ">
                    <div className="h-14 w-14  overflow-hidden flex items-center justify-center">
                      <img src={ing.image} alt={ing.name} className="h-[54px] w-[54px] object-cover"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2F2E] text-[18px] mb-0.5">{ing.name}</h4>
                      <p className="text-[#646665] text-[16px] leading-8">{ing.benefit}</p>
                    </div>
                    <div className="text-[14px] text-[#3A643B] font-semibold">
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[633px] h-[166px] max-w-full space-y-2">
              <h4 className="text-[20px] font-bold leading-5">How to use</h4>
              <p className="bg-[#FDEAD2] rounded-xl p-3 text-[18px] leading-7 text-[#1A1A1ACC]">
                {product.howToUse}
              </p>
            </div>
            <div className="w-[633px] h-[136px] max-w-full space-y-2">
              <h4 className="text-[20px] leading-6 font-bold">General Instructions</h4>
              <p className="bg-[#FDEAD2] rounded-xl p-3 text-[16px] leading-7 text-[#1A1A1ACC]">
                {product.generalInstructions}
              </p>
            </div>
            <div className="w-[630px] h-[532px] max-w-full ">
              <h4 className="text-[20px] leading-5 font-bold">Commonly Asked Questions</h4>
              <div className="flex flex-col space-y-4">
                {product.faqs?.map((faq, idx) => (
                  <div key={idx} className="p-3  bg-[#FDEAD2] rounded-xl">
                    <p className="font-bold text-[16px] leading-6">{faq.question}</p>
                    <p className="text-[#1A1A1ACC] leading-5 text-[14px]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className='font-medium text-[18px] leading-6'>Trust the voice</p>
              <img src={reviewVideoImage} alt='review video ' className='h-80 w-[599px] rounded-xl'/>
            </div>
          </section>
        </div>
      </main>
      <ReviewsAndRating/>
    </>
  )
}

export default ProductDetailed

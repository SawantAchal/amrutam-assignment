import React from 'react'
import { summarCollectionData } from '../data/SummarCollectionData.js'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const SummarCollectionCard = () => {
    const StarRating = ({ rating, max = 5 }) => {
        const stars = [];

        for (let i = 1; i <= max; i++) {
            if (rating >= i) {
            stars.push(<FaStar key={i} className="text-[#F4B000]" />)
            } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-[#F4B000]" />)
            } else {
            stars.push(<FaRegStar key={i} className="text-[#F4B000]" />)
            }
        }
        return <div className="flex items-center gap-1">{stars}</div>
    };

  return (
    <>
        <section className="max-w-6xl mx-auto pb-16">
            <h2 className="text-lg font-semibold text-[#3A643C] mb-3">Summer Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {summarCollectionData.map((data) => (
                <article key={data.id} className="bg-white rounded-2xl shadow-sm overflow-hidden w-full">
                    <img src={data.image} alt={data.title} className="w-full h-[280px] object-cover" />
                    <div className="p-4 space-y-1 text-sm">
                        <p className="text-[#2E2F2E] leading-snug text-center text-lg">{data.title}</p>
                        <p className="text-[#3A643C] font-semibold">
                            ₹{data.price} <span className="text-xs font-normal text-[#777]"> &nbsp;{data.size} </span>
                        </p>
                        <div className="flex items-center gap-2">
                            <StarRating rating={data.rating} />
                            <span className="text-xs text-[#777]">({data.reviewsCount})</span>
                        </div>
                    </div>
                </article>
                ))}
            </div>
        </section>
    </>
  )
}

export default SummarCollectionCard

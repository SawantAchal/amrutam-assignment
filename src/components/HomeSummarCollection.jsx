import React from 'react'
import SummarCollectionCard from './SummarCollectionCard'
import SideArrow from '../assets/SideArrow.png'

const HomeSummarCollection = () => {
  return (
    <>
        <div className='flex items-center'>
            <SummarCollectionCard/>
            <img src={SideArrow} alt='Side Arrow' className='w-[72px] h-[69px]'/>
        </div>
        <div className='flex items-center'>
            <SummarCollectionCard/>
            <img src={SideArrow} alt='Side Arrow' className='w-[72px] h-[69px]'/>
        </div>
    </>
  )
}

export default HomeSummarCollection
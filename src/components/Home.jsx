import React from 'react'
import All from '../assets/All.png'
import Hair from '../assets/Hair.png'
import Skin from '../assets/Skin.png'
import Digestion from '../assets/Digestion.png'
import Bones from '../assets/Bones.png'
import Immunity from '../assets/Immunity.png'
import More from '../assets/More.png'
import HomeSummarCollection from './HomeSummarCollection'

const Home = () => {
  return (
    <>
      <main className="bg-[#FFF7E2] min-h-screen cursor-pointer">
        <section className="flex justify-center gap-6 py-10">
          <img src={All} alt="All" className="w-[84px] h-[101px]" />
          <img src={Hair} alt="Hair" className="w-[84px] h-[101px]" />
          <img src={Skin} alt="Skin" className="w-[84px] h-[101px]" />
          <img src={Digestion} alt="Digestion" className="w-[84px] h-[101px]" />
          <img src={Bones} alt="Bones" className="w-[84px] h-[101px]" />
          <img src={Immunity} alt="Immunity" className="w-[84px] h-[101px]" />
          <img src={More} alt="More" className="w-[84px] h-[101px]" />
        </section>
        <HomeSummarCollection/>
      </main>
    </>
  )
}

export default Home

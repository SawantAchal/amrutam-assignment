import React from 'react'
import app1 from '../assets/appBanner1.png'
import app2 from '../assets/appBanner2.png'
import app3 from '../assets/appBanner3.png'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import appStore from '../assets/appStore.png'
import playStore from '../assets/playStore.png'
import msgIcon from '../assets/msgIcon.png'

const AppBanner = () => {
  return (
    <>
        <div className="bg-[#FFF7E2] h-[707px] border border-[#DCD8CD]">
            <div className="max-w-7xl mx-auto h-full grid grid-cols-2 items-center px-12">
                <div className="space-y-8">
                    <div className="space-y-4 max-w-lg">
                        <h2 className="text-[36px] font-semibold text-[#3A643C] leading-snug">Download Amrutam Ayurveda App Now</h2>
                        <p className="text-[#6B6B6B] text-[16px]">
                        The Amrutam Ayurveda App is your one-stop app
                        for all things Ayurveda! Apart from mimicking
                        the website, the app has added benefits
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-md">
                        {[
                        "Access To Prescriptions",
                        "Track Health Efficiently",
                        "Direct Chat With Doctors",
                        "In-App Reminders For Consultations",
                        ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 border border-[#D6D6C2] rounded-xl px-4 py-3 text-[#3A643C] text-sm">
                            <img src={msgIcon} alt="" className="h-8 w-8" />
                            <span>{text}</span>
                        </div>
                        ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                        <img src={playStore} alt="Play Store" className="h-[72px] cursor-pointer" />
                        <img src={appStore} alt="App Store" className="h-[72px] cursor-pointer" />
                    </div>
                </div>
                <div className='relative flex-1 h-full flex items-center justify-center'>
                    <img src={app1} alt='App main screen' className='h-[347px] w-[283px] object-contain z-20'/>
                    <img src={app2} alt='Engagement card' className='absolute left-0 top-[18%] h-[140px] w-[195px] object-contain rounded-2xl'/>
                    <img src={arrow2} alt='Arrow to phone' className='absolute left-[32%] top-[12%] h-[52px] w-[60px] object-contain'/>
                    <section className='absolute right-[8%] bottom-[10%] bg-[#DFDFC7] h-[155px] w-[170px] rounded-2xl flex items-center justify-center shadow-sm'>
                        <img src={app3} alt='Downloads card' className='h-[115px] w-[102px] object-contain' />
                    </section>
                    <img src={arrow1} alt='Arrow to downloads' className='absolute right-[18%] bottom-[26%] h-[110px] w-[150px] object-contain'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppBanner

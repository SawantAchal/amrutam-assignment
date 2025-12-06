
import React from 'react'
import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaLinkedinIn, FaPinterestP,} from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="bg-[#E7EFE9] text-[#2F4F2F] py-16">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16">
                <div className="space-y-4 text-[14px]">
                    <h3 className="font-semibold">Get in touch</h3>
                    <p>support@amrutam.global</p>
                    <p>Amrutam Pharmaceuticals Pvt Ltd.,<br />chitragupt ganj, Nai Sadak, Lashkar,<br />Gwalior - 474001</p>
                    <p>+91 9713171999</p>
                    <div className="flex gap-3 pt-2">
                        {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP].map(
                            (Icon, i) => (
                                <span key={i} className="h-10 w-10 rounded-full bg-[#3A643C] text-white flex items-center justify-center cursor-pointer">
                                    <Icon size={16} />
                                </span>
                            )
                        )}
                    </div>
                </div>
                <div className="space-y-3 text-[14px]">
                    <h3 className="font-semibold">Information</h3>
                    <p>About Us</p>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Privacy Policy for Mobile Apps</p>
                    <p>Shipping, return and cancellation Policy</p>
                    <p>International Delivery</p>
                    <p>For Businesses, Hotels, and Resorts</p>
                </div>
                <div className="space-y-4 text-[14px]">
                    <h3 className="font-semibold text-[#3A643B]"> Subscribe to our Newsletter and join<br /> Amrutam Family today!</h3>
                    <div className="flex ">
                        <input type="email" placeholder="Your Email Address" className="h-12 px-4 w-full rounded-l-full outline-none border border-[#3A643C] bg-transparent" />
                        <button className="h-12 px-6 rounded-r-full bg-black text-white font-medium">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer

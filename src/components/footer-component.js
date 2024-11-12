"use client";
import React from 'react'
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter } from "react-icons/fa";
const Footer = () => {

    return (
        <>
            <div className='flex flex-row justify-evenly'>
                <div className='font-serif font-semibold  text-xl'>Dribble</div>
                <div className='text-sm font-medium'>
                    For Designers
                </div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600 '>
                    Hire Talent
                </div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>
                    Inspiration
                </div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>
                    Advertising
                </div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600' >Blog
                </div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>About
                </div>

                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>Careers</div>
                <div className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>Support</div>
                <div className='flex flex-row justify-around'>
                    <div className='mr-2 hover:cursor-pointer hover:text-slate-600'><FaTwitter /></div>
                    <div className='mr-2 hover:cursor-pointer hover:text-slate-600'> <FaInstagram /> </div>
                    <div className='mr-2 hover:cursor-pointer hover:text-slate-600'> <FaFacebook /> </div>
                    <div className='hover:cursor-pointer hover:text-slate-600'> <FaPinterestP /></div>
                </div >
            </div >
        </>
    )
}

export default Footer

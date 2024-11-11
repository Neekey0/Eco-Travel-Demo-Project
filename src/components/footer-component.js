"use client";
import React from 'react'
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter } from "react-icons/fa";
const Footer = () => {

    return (
        <>
            <div className='flex flex-row justify-evenly'>
                <p className='font-serif font-semibold  text-xl'>Dribble</p>
                <p className='text-sm font-medium'>
                    For Designers
                </p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600 '>
                    Hire Talent
                </p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>
                    Inspiration
                </p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>
                    Advertising
                </p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600' >Blog
                </p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>About
                </p>

                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>Careers</p>
                <p className='text-sm font-medium hover:cursor-pointer hover:text-slate-600'>Support</p>
                <div className='flex flex-row justify-around'>
                    <p className='mr-2 hover:cursor-pointer hover:text-slate-600'><FaTwitter /></p>
                    <p className='mr-2 hover:cursor-pointer hover:text-slate-600'> <FaInstagram /> </p>
                    <p className='mr-2 hover:cursor-pointer hover:text-slate-600'> <FaFacebook /> </p>
                    <p className='hover:cursor-pointer hover:text-slate-600'> <FaPinterestP /></p>
                </div>
            </div>
        </>
    )
}

export default Footer

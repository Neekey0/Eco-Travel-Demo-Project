"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { BsSave } from "react-icons/bs";
import PopUp from './pop-up-component';

const BodyComponent = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleFClick = () => {
        window.location.href = "https://instagram.com";
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='font-medium font-serif text-2xl text-left '>
                    Eco-travel booking platform
                </div>
                <div></div>
                <div className='flex flex-row justify-evenly items-center w-full'>
                    <div className='flex items-center space-x-2'>
                        <Image
                            src="/images/images.png"
                            alt="image"
                            className="rounded-full"
                            width={50} height={50}
                            objectFit="cover"
                        />
                        <div className='flex flex-col'>
                            <p>Nikita Shrestha</p>
                            <p className='text-green-500 text-xs'>Available for work
                                <span className='text-gray-600 text-sm pl-2 hover:underline hover:text-green-500 hover:cursor-pointer' onClick={handleFClick}>Follow</span>
                            </p>

                        </div>

                    </div>

                    <div className='flex flex-row'>
                        <div className='border-2 px-2 pt-2 rounded-full hover:cursor-pointer text-lg mr-4'>
                            <GiSelfLove onClick={handleClick} />
                        </div>
                        <div className='border-2 px-2 pt-2 rounded-full text-lg hover:cursor-pointer mr-4'>
                            <BsSave onClick={handleClick} />
                        </div>
                        <div className='border rounded-full p-2 px-4 bg-slate-900 text-white font-medium text-sm  hover:cursor-pointer' onClick={handleClick} >
                            Get In Touch
                        </div>
                    </div>

                </div>
                <div className='mt-3'>
                    <Image
                        src="/images/img.png"
                        alt="image"
                        className="rounded-lg "
                        width={900} height={600}
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </div>

            <PopUp open={open} onCancel={handleCancel} />
        </>
    )
}

export default BodyComponent

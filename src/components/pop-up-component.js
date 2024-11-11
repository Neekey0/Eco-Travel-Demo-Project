"use client";
import React, { useEffect, useState } from 'react'
import { Modal } from "antd";
import { SlSocialGoogle } from "react-icons/sl";

const PopUp = ({ open, onCancel }) => {

    const handleSignUp = () => {
        window.location.href = "https://mail.google.com";
    }

    return (
        <>
            <Modal
                // title="Loading..."
                open={open}
                onCancel={onCancel}
                footer={[]}
            >
                <div className='items-center'>
                    <div className='font-serif font-semibold  text-xl '>
                        Dribble
                    </div>
                    <div className='text-center text-base m-4'>To like a shot, Please create an account.
                    </div>
                    <div className='mt-6 border rounded-full p-3 px-6 bg-slate-900 font-semibold font-serif text-white flex items-center justify-center space-x-2'>
                        <SlSocialGoogle className='text-lg bg-white text-white' />
                        <p className='text-white hover:cursor-pointer hover:underline hover:underline-offset-auto ' onClick={handleSignUp}>Sign up with Google</p>
                    </div>
                    <div className='border border-separate border-slate-600 m-4'></div>
                    <div className='mt-4 border-2  rounded-full p-2 text-center font-semibold hover:cursor-wait ' onClick={handleSignUp}>Continue with email</div>
                    <div className='text-center mt-6'>
                        By creating an account you agree with our
                        <span className='pl-1 underline hover:text-slate-700 hover:cursor-pointer'>
                            Terms of Service  </span>,
                        <span className='underline hover:text-slate-700 hover:cursor-pointer'> Privacy Policy</span>,
                        and our default <span className='underline hover:text-slate-700 hover:cursor-pointer'> Notification Settings</span>.
                    </div>

                    <div className='m-4 text-center'>Already have an account?
                        <span className='underline pr-2 hover:text-slate-800 hover:cursor-pointer'>Log in</span>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default PopUp

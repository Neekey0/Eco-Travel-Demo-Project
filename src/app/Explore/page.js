import Header from '@/components/header-component'
import React from 'react'
import Loading from '../loading'

const Explore = () => {
    return (
        <>
            <div className="h-screen bg-white ">

                <Header />
                <div className=' mt-8 text-center font-semibold'>
                    Explore With Me
                </div>
                <Loading />

            </div>

        </>
    )
}

export default Explore

import Header from '@/components/header-component'
import React from 'react'
import Loading from '../loading'

const Blogs = () => {
    return (
        <>
            <div className="h-screen bg-white ">

                <Header />
                <div className=' mt-8 text-center font-semibold'>
                    Welcome to the Blogs
                </div>
                <Loading />

            </div>

        </>
    )
}

export default Blogs

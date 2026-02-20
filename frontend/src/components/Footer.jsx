import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[#0a0f1b] w-full px-4 py-4 md:px-8 lg:px-15  flex flex-col justify-center items-center gap-4 '>

                <h1 className='text-white text-3xl font-bold text-center'>Ready to secure your digital life?</h1>
                <h2 className='text-gray-400 text-md md:text-lg text-center'>Join thousands of users who trust SecurePass to keep their passwords safe.</h2>
                <button className='bg-[#22c55e] text-white text-md md:text-lg xl:text-xl cursor-pointer px-2 py-3 lg:px-6  rounded-lg hover:bg-green-600 transition mt-2'>Get Started For Free</button>

                <div className='flex flex-col md:flex-row gap-1 justify-around items-center w-full'>
                    <div className=' text-2xl xl:text-3xl text-white'>
                        <span className=''>&lt;</span>
                        Secure
                        <span className='text-green-500'>Pass</span>
                        <span className=' text-green-500'>/&gt;</span>
                    </div>
                    <div>
                        <h1 className='text-gray-400 text-sm'>Copyright © 2026 SecurePass. All rights reserved.</h1>
                    </div>
                    <div>
                        <h1 className='text-gray-400 text-sm'>Created with ❤️ by Saurabh Kumar</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
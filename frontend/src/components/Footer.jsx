import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-[#0a0f1b] w-full h-70  flex flex-col justify-center items-center gap-4'>

                <h1 className='text-white text-3xl font-bold'>Ready to secure your digital life?</h1>
                <h2 className='text-gray-400 text-lg'>Join thousands of users who trust SecurePass to keep their passwords safe.</h2>
                <button className='bg-[#22c55e] text-white text-xl cursor-pointer px-6 py-3 rounded-lg hover:bg-green-600 transition mt-8'>Get Started For Free</button>

                <div className='flex justify-around items-center w-full'>
                    <div className=' text-3xl text-white'>
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
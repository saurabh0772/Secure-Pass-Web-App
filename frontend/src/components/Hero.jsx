import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();


    return (
        <>
            <div className='bg-[#111827] w-full flex flex-col lg:flex-row py-10'>
                <div className='w-full px-4 md:px-8 xl:px-15'>
                    <h1 className='text-3xl mt-8 md:text-4xl xl:text-7xl font-bold text-white lg:mt-16'>Digital Fortress,
                    </h1>
                    <h1 className='text-3xl md:text-4xl xl:text-7xl font-bold text-white'>One Tap Away.
                    </h1>

                    <h2 className='text-gray-400 mt-2 xl:text-2xl xl:mt-5'>Master your passwords with military-grade security and effortless sync.</h2>

                    <button onClick={() => {
                        if (isAuthenticated) {
                            navigate("/manager");
                        } else {
                            loginWithRedirect();
                        }
                    }} className='bg-[#22c55e] text-white text-md md:text-lg xl:text-xl cursor-pointer px-2 py-3 lg:px-6  rounded-lg hover:bg-green-600 transition mt-8'>
                        {isAuthenticated ? "Go to Dashboard" : "Get Started For Free"}
                    </button>

                    <button className='border border-green-500 text-md md:text-lg xl:text-xl text-green-500 px-2 py-3 lg:px-6  rounded-lg hover:bg-green-500/10 ml-3 cursor-pointer'>Watch Demo</button>

                </div>

                <div className='hidden lg:flex w-full justify-center items-center '>
                    <img src="/assets/security.png" alt="" className='w-60 mx-auto' />
                </div>
            </div>


            {/* POWERFUL FEATURES  */}
            <div className='bg-[#0a0f1b] w-full'>
                <div className='flex justify-center items-center pt-8'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold'>Powerful <span className='text-green-500'>Features</span></h1>
                </div>

                <div className='w-full pb-8'>
                    <div className='flex flex-col gap-4 md:flex-row justify-center items-center lg:space-x-10 pt-10 px-5'>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <lord-icon
                                src="https://cdn.lordicon.com/fgxwhgfp.json"
                                trigger="hover"
                                colors="primary:#08a88a,secondary:#08a88a"
                                style={{ width: "80px", height: "80px" }}>
                            </lord-icon>


                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Unbreakable Encryption :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>AES-256 bit, the gold standard.</h3>

                        </div>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <lord-icon
                                src="https://cdn.lordicon.com/yvjimpju.json"
                                trigger="hover"
                                colors="primary:#08a88a,secondary:#08a88a"
                                style={{ width: "80px", height: "80px" }}>
                            </lord-icon>

                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Instant Cloud Sync :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Access Passwords across all your devices seamlessly.</h3>

                        </div>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <lord-icon
                                src="https://cdn.lordicon.com/urswgamh.json"
                                trigger="hover"
                                colors="primary:#08a88a,secondary:#08a88a"
                                style={{ width: "80px", height: "80px" }}>
                            </lord-icon>

                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Smart Password Generator :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Create and store strong, unique credentials.</h3>

                        </div>
                    </div>

                </div>

            </div>



            {/* HOW IT WORKS  */}
            <div className='bg-[#111827] w-full'>
                <div className='flex justify-center items-center pt-8'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold'>How <span className='text-green-500'>It Works</span></h1>
                </div>

                <div className='w-full pb-8 '>
                    <div className='flex flex-col gap-4 md:flex-row justify-center items-center lg:space-x-10 pt-10 px-5'>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <div className='bg-green-800 border-4 border-green-500 rounded-full w-20 h-20 flex justify-center items-center text-3xl text-white font-bold'>1</div>


                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Create Account :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Create your free account with a strong master password.</h3>

                        </div>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <div className='bg-green-800 border-4 border-green-500 rounded-full w-20 h-20 flex justify-center items-center text-3xl text-white font-bold'>2</div>

                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Add Passwords :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Store your existing passwords or create new secure ones.</h3>

                        </div>
                        <div className='w-90 h-70 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>


                            <div className='bg-green-800 border-4 border-green-500 rounded-full w-20 h-20 flex justify-center items-center text-3xl text-white font-bold'>3</div>

                            <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>Access Anywhere :</h1>
                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Use your passwords on any device, anytime you need them.</h3>

                        </div>
                    </div>

                </div>

            </div>



                {/* TESTIMONIALS  */} 
            <div className='bg-[#0a0f1b] w-full'>
                <div className='flex justify-center items-center pt-8'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl text-white font-bold'>What Our <span className='text-green-500'>Users Say</span></h1>
                </div>

                <div className='w-full pb-8 '>
                    <div className='flex flex-col gap-4 md:flex-row justify-center items-center lg:space-x-10 pt-10 px-5'>
                        <div className='w-90 h-50 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>

                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Secure Pass makes digital life Secure & Simple.</h3>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div className='bg-white w-13 h-13 rounded-full text-center'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/srupsmbe.json"
                                        trigger="hover"
                                        colors="primary:#08a88a,secondary:#08a88a"
                                        style={{ width: "50px", height: "50px" }}>
                                    </lord-icon>
                                </div>
                                <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>- John D.</h1>
                            </div>



                        </div>

                        <div className='w-90 h-50 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>

                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>The most secure and user-friendly password manager available.</h3>

                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div className='bg-white w-13 h-13 rounded-full text-center'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/srupsmbe.json"
                                        trigger="hover"
                                        colors="primary:#08a88a,secondary:#08a88a"
                                        style={{ width: "50px", height: "50px" }}>
                                    </lord-icon>
                                </div>
                                <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>- Jane S.</h1>
                            </div>


                        </div>

                       <div className='w-90 h-50 lg:w-100 lg:h-90 bg-[#111827] border border-gray-800 rounded-2xl flex flex-col items-center gap-4 justify-center px-5'>

                            <h3 className='text-gray-400 text-lg xl:text-xl text-center'>Easy to use and highly secure password manager for all your devices.</h3>

                            <div className='flex flex-row justify-center items-center gap-3'>
                                <div className='bg-white w-13 h-13 rounded-full text-center'>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/srupsmbe.json"
                                        trigger="hover"
                                        colors="primary:#08a88a,secondary:#08a88a"
                                        style={{ width: "50px", height: "50px" }}>
                                    </lord-icon>
                                </div>
                                <h1 className='text-white text-xl xl:text-2xl font-bold text-center'>- Alex M.</h1>
                            </div>


                        </div>

                    </div>

                </div>

            </div>





        </>
    )




}

export default Hero
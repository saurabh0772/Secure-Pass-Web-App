import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { 
  loginWithRedirect, 
  logout,       
  isAuthenticated, 
  isLoading 
} = useAuth0();
  






  return (
    <nav className='bg-[#0a0f1b] flex justify-between px-4 py-4 md:px-8 xl:px-15  text-white w-full'>
      <div className=' text-2xl md:text-3xl'>
        <span className=''>&lt;</span>
        Secure
        <span className='text-green-500'>Pass</span>
        <span className=' text-green-500'>/&gt;</span>
      </div>
      <ul className=''>
        <li className='flex gap-2 md:gap-4 xl:gap-6 items-center'>
          {/* <a href="#" className='text-gray-200 hover:text-white hover:border-white border border-green-500 text-green-500 rounded-md px-2 py-1' onClick={handleGetStarted}>Login</a> */}

          {isLoading ? null : isAuthenticated ? (
            <button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin
                  }
                })
              }
          className="text-md md:text-xl xl:text-xl text-gray-200 hover:text-white hover:border-white border border-green-500 text-green-500 rounded-md px-2 py-1"
            >
          <h1>LogOut</h1>
        </button>
        ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="text-md md:text-lg xl:text-xl text-gray-200 hover:text-white hover:border-white border border-green-500 text-green-500 rounded-md px-2 py-1"
        >
          <h1>Login</h1>
        </button>
          )}



        <img src="/assets/github.png" alt="" className='w-8 bg-white rounded-full cursor-pointer filer invert' />
      </li>
    </ul>
    </nav >
  )
}

export default Navbar
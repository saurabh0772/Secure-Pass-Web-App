import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const { 
  loginWithRedirect, 
  logout,        // 👈 YE ADD KAR
  isAuthenticated, 
  isLoading 
} = useAuth0();
  const navigate = useNavigate();






  return (
    <nav className='bg-[#0a0f1b] flex justify-between px-20 py-4 text-white'>
      <div className=' text-3xl'>
        <span className=''>&lt;</span>
        Secure
        <span className='text-green-500'>Pass</span>
        <span className=' text-green-500'>/&gt;</span>
      </div>
      <ul className=''>
        <li className='flex gap-6 '>
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
          className="text-gray-200 hover:text-white hover:border-white border border-green-500 text-green-500 rounded-md px-2 py-1"
            >
          Logout
        </button>
        ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="text-gray-200 hover:text-white hover:border-white border border-green-500 text-green-500 rounded-md px-2 py-1"
        >
          Login
        </button>
          )}



        <img src="/assets/github.png" alt="" className='w-8 bg-white rounded-full cursor-pointer filer invert' />
      </li>
    </ul>
    </nav >
  )
}

export default Navbar
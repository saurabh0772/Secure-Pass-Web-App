import React from 'react'
import { useRef, useState, useEffect } from 'react'
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const Manager = () => {

  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();



  useEffect(() => {

    const fetchPasswords = async () => {
      try {
        const token = await getAccessTokenSilently();

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/passwords`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        console.log("FETCHED:", res.data);
        setPasswordArray(res.data);

      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };

    if (isAuthenticated) {
      fetchPasswords();
    }

  }, [isAuthenticated]);


  const showPassword = () => {
    if (ref.current.src.includes("eye.png")) {
      ref.current.src = "assets/eyecross.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "assets/eye.png";
      passwordRef.current.type = "password";
    }
  }

  const savePassword = async () => {

    // console.log(form);

    const token = await getAccessTokenSilently();

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/save-pass`,
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // Sirf success ke baad update karo
    setPasswordArray([...passwordArray, res.data]);

    setForm({ site: "", username: "", password: "" });
    toast('Password saved !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  }

  const copyText = (text) => {
    toast('🦄 Copied to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  }

  const editPasswords = async (item) => {
    setForm(item);

    try {
      const token = await getAccessTokenSilently();

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-pass/${item._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // UI update
      const newArray = passwordArray.filter(
        (password) => password._id !== item._id
      );

      setPasswordArray(newArray);

    } catch (error) {
      console.log(error);
    }

    let newArray = passwordArray.filter((password) => {
      return password.site !== item.site || password.username !== item.username || password.password !== item.password;
    });
    setPasswordArray(newArray);

  }

  const deletePasswords = async (item) => {
    try {
      const token = await getAccessTokenSilently();

      await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-pass/${item._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      // UI update
      const newArray = passwordArray.filter(
        (password) => password._id !== item._id
      );

      setPasswordArray(newArray);

      toast('Password deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-slate-950 pt-10'>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


      <div className='border border-white w-90 lg:w-250 mx-auto pb-10 rounded-lg bg-gray-900'>
        <div className=' pt-10 mx-auto flex flex-col items-center text-gray-400'>
          <div className=' text-2xl lg:text-3xl text-white'>
            <span className=''>&lt;</span>
            Secure
            <span className='text-green-500'>Pass</span>
            <span className=' text-green-500'>/&gt;</span>
          </div>

          <div>
            <h3>Your own password manager</h3>
          </div>
        </div>

        <div className='lg:w-3/4 h-auto mx-auto mt-2 flex flex-col items-center justify-center rounded-lg '>

          <input type="text" value={form.site} name='site' onChange={handleChange} placeholder='Enter website URL' className='border border-green-500 w-80 lg:w-3/4 h-10 rounded-lg px-4 bg-[#0f172a] text-white outline-none placeholder:text-white' />
          <div className='lg:w-3/4 flex gap-3 mt-3 lg:mt-5 mx-auto flex flex-col lg:flex-row'>
            <input type="text" value={form.username} name='username' onChange={handleChange} placeholder='Enter Username' className='border border-green-500 w-80 lg:w-1/2 h-10 rounded-lg px-4 bg-[#0f172a] text-white outline-none placeholder:text-white' />

            <div className='relative w-1/2 h-10 rounded-full'>
              <input type="password" ref={passwordRef} value={form.password} name='password' onChange={handleChange} placeholder='Enter Password' className='border border-green-500 w-80 lg:w-full h-10 rounded-lg px-4 bg-[#0f172a] text-white outline-none placeholder:text-white' />
              <span className='absolute right-4 top-2.5 hover:cursor-pointer' onClick={showPassword}>
                <img width="20" ref={ref} src="assets/eye.png" alt="" className='filter invert' />
              </span>
            </div>

          </div>
          <div className='mt-3'>
            <button className='border border-white text-white font-bold rounded-lg px-5 cursor-pointer bg-green-700 py-2 flex justify-center items-center gap-1 hover:bg-green-600' onClick={savePassword}>
              <lord-icon
                src="https://cdn.lordicon.com/tsrgicte.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#22c55e">
              </lord-icon>
              Save Password</button>
          </div>
        </div>
      </div>

      <div className=' w-90 mt-10 lg:w-3/4 mx-auto flex flex-col items-center justify-center rounded-lg gap-4 pb-50 text-white '>

        <div className='w-3/4'><h2 className='font-bold'>Your Passwords :</h2></div>

        {passwordArray.length === 0 && <div className='text-center text-gray-500 '>No passwords saved yet.</div>}

        {passwordArray.length > 0 &&
          <table className="table-auto w-90 lg:w-240 mx-auto rounded-md overflow-hidden  ">
            <thead className='bg-[#1e293b]'>
              <tr>
                <th >Site</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='bg-slate-600'>
              {passwordArray.map((item) => {
                return <tr key={item._id}>

                  <td className='text-center lg:w-70 border-2 border-slate-950 p-1 lg:p-2 '>
                    <div className='flex justify-center items-center '>
                      <div className='w-15 lg:max-w-50 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                        {item.site}
                      </div>
                      <div className='cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/hmpomorl.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#22c55e"
                          style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='text-center lg:w-70 border-2 border-slate-950 p-1 lg:p-2 '>
                    <div className='flex justify-center items-center'>
                      <div className='w-15 lg:max-w-50 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                        {item.username}
                      </div>
                      <div className='cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/hmpomorl.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#22c55e"
                          style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='text-center lg:w-70 border-2 border-slate-950 p-1 lg:p-2 '>
                    <div className='flex justify-center items-center'>
                      <div className='w-15 lg:max-w-50 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                        {item.password}
                      </div>
                      <div className='cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/hmpomorl.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#22c55e"
                          style={{ width: "20px", height: "20px" }}>
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='text-center lg:w-40 border-2 border-slate-950 p-2 '>
                    <div className='flex items-center justify-center gap-3'>
                      <div onClick={() => { editPasswords(item) }}>
                        <lord-icon className='w-6 h-6 cursor-pointer'
                          src="https://cdn.lordicon.com/exymduqj.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#22c55e">
                        </lord-icon>
                      </div>


                      <div onClick={() => { deletePasswords(item) }}>
                        <lord-icon className='w-6 h-6 cursor-pointer'
                          src="https://cdn.lordicon.com/jzinekkv.json"
                          trigger="hover"
                          colors="primary:#ffffff,secondary:#22c55e">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              })}

            </tbody>
          </table>
        }
      </div>

    </div>
  )
}

export default Manager

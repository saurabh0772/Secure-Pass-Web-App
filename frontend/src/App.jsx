import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useAuth0 } from "@auth0/auth0-react";
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Hero from './components/Hero';
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect: login, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

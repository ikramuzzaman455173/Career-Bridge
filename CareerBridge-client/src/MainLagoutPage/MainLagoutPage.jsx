import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const MainLagoutPage = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='min-h-[calc(100vh-140px)]'>
      <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLagoutPage
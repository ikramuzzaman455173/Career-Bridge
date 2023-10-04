import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const MainLayoutPage = () => {
  return (
    <div className="bg-teal-100">
      <Navbar />
      <div className="min-h-[calc(100vh-140px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayoutPage;


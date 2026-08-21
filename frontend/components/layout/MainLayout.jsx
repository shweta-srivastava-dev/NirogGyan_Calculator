import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainLayout = () => {
  return (
    <>
    <div className="min-h-screen bg-[#f8fafc]">
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>  
    </div>
    </>
  )
}

export default MainLayout

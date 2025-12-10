import React from 'react'
import Ad from '../components/Ad'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppBanner from '../components/AppBanner'
import Home from '../components/Home'
import { Outlet } from 'react-router-dom'
import CitrakIngredient from '../components/CitrakIngredient'

const HomePage = () => {
  return (
    <>
        <Ad/>
        <Nav/>
        <Header/>
        {/* <Home/> */}
        <Outlet/>
        <AppBanner/>
        <Footer/>
    </>
  )
}

export default HomePage
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import NavTab from '../Components/NavTab/NavTab'
import Searchbar from '../Components/Searchbar/Searchbar'

function HomeLayout({children}) {
  return (
    <>
    <Navbar />
    <Searchbar />
    <NavTab/>
    {children}
    </>
  )
}

export default HomeLayout
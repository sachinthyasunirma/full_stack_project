import React from 'react'

function HomeLayout({children}) {
  return (
    <>
    <h1>NavBar</h1>
    {children}
    <h1>Footer</h1>
    </>
  )
}

export default HomeLayout
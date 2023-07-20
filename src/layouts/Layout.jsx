import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen mx-auto max-w-1440">
      <div className="p-4">
        <SideBar />
      </div>

      <div className="flex flex-col flex-1">
        <header className=" p-4">
          <Header />
        </header>

        <main className="flex-1 p-4 ">{children}</main>
      </div>
    </div>
  )
}

export default Layout

import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import DrawerNavbar from '../../Components/navbar/DrawerNavbar'
import { Outlet } from 'react-router-dom'

const Main = () => {

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const toggleDrawer = () => {
      setOpenDrawer(prev => !prev);
    }

  return (
    <>
        <Navbar toggleDrawer={toggleDrawer} />
        <DrawerNavbar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
        <Outlet />
    </>
  )
}

export default Main
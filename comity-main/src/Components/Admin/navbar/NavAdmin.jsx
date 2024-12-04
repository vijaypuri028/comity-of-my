import { Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { navyLogoColor } from '../../../Common/constants'
import NavCard from './NavCard'
import { Stars } from '@mui/icons-material'
import NavEdit from './NavEdit'
import navContext from '../../../context/admin/navContext'

const NavAdmin = () => {

  const { allNavRoutes, getAllNav } = useContext(navContext);
  React.useEffect(() => {
    getAllNav();
  }, [getAllNav])

  return (
    <Container
      sx={{
        "& > h2": {
          paddingBlock: 2,
          textAlign: "center",
        },
      }}
    >
      <Typography variant="h2" color={navyLogoColor}>
        Navbar Admin Panel
      </Typography>

      <Typography
        variant="h5"
        sx={{
          pb: 2,
          color: navyLogoColor,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Stars />
        Available Navbar Sections &rarr;
      </Typography>
      {
        allNavRoutes?.map(route => 
          <NavCard key={route._id} route={route} />
        )
      }

      {/* <NavCard route={{
        name: 'home',
        path: '/',
        title: 'Home',
        element: 'Home',
        showThis: true
      }} /> */}

      <NavEdit />

    </Container>
  )
}

export default NavAdmin
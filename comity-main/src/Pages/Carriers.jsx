import React from 'react'
import TopTemplete from '../Components/utils/TopTemplete'
import { Box, Button, Typography } from '@mui/material'
import { lightNavyBg, navyLogoColor } from '../Common/constants'
import Footer from '../Components/utils/Footer'
import { useNavigate } from 'react-router-dom'
import { contactRoute } from '../Common/routes'

const Carriers = () => {

  const navigate = useNavigate();

  const goToContact = () => {
    navigate(contactRoute.path);
    window.scrollTo(0, 0);
  }

  return (
  <>
    <TopTemplete
      background={"https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_1280.jpg"}
      title={"Comity Edutech and you"}
      tagLine={"Working together to deliver value to your business."} 
      />

      <Box sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: lightNavyBg,
        textAlign: 'center',
        '& > h3': {
          fontSize: {
          xs: 32,
          sm: 40,
          md: 48
        },
        pb: {
          xs: 1,
          sm: 3,
          md: 5
        },
        color: navyLogoColor,
      },
        '& > h6': {
          color: 'gray',
          fontWeight: 'bold',
          pb: {
            xs: 1,
            md: 3
          },
        }
      }}>
        <Typography variant='h3'>
          Currently No Openings Available
        </Typography>

        <Typography variant='h6' >
          For more contact us &rarr;
        </Typography>

        <Button variant='contained' onClick={goToContact} size='large' sx={{
          borderRadius: 0,
          textTransform: 'none'
        }} >
          Contact Us
        </Button>
      </Box>

      <Footer />
  </>
  )
}

export default Carriers
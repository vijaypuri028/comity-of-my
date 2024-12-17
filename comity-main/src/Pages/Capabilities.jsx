import React from 'react'
import TopTemplete from '../Components/utils/TopTemplete'
import { Box, Typography } from '@mui/material'
import Footer from '../Components/utils/Footer'
import { lightNavyBg } from '../Common/constants'
import { itemsSliderCapabilities } from '../Common/CapabilitiesSlider'
import ImgCarousel from '../Components/utils/ImgCarousel'

function Capabilities() {
  return (
    <>
    <TopTemplete
      background={"https://img.freepik.com/free-photo/selective-focus-computer-screen-with-startup-team-startup-employees-working-remote-group-video-call-brainstorming-ideas-african-american-woman-gesturing-internet-meeting-with-colleagues_482257-43390.jpg?t=st=1719492144~exp=1719495744~hmac=4cb553648578fd9ba52735925f478b3050e8d0d6c53d6e239d67f7889819d9fc&w=996"}
      title={"Comity Edutech and you"}
      tagLine={"Working together to deliver value to your business."} 
    />
    <ImgCarousel items={itemsSliderCapabilities} bgColor={lightNavyBg} marginY="30px" />
    <Box sx={{
      background: lightNavyBg,
      paddingBlock: {
        xs: 2,
        sm: 6,
        md: 10
      },
      paddingInline: {
        xs: 2,
        sm: 6,
        md: 10
      },
      '& > p': {
        fontSize: {
          xs: 16,
          sm: 18
        },
        pb: 2
      }
    }}>
      <Typography variant="h4" sx={{ pb: 4 }}>
        Our Capabilities
      </Typography>
      <Typography sx={{ pb: 3 }}>
        At Comity Edutech Services Private Limited, operational since 2010, we pride ourselves on our extensive expertise and successful track record in managing government-funded projects from Central & State Governments, PSUs, and Autonomous bodies. Our core competencies include:
      </Typography>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Core Competencies:
      </Typography>
      <Typography sx={{ pb: 1 }}>
        <strong>Skill Development Training:</strong> We provide comprehensive training programs designed to enhance the skill set of individuals, preparing them for various industries.
      </Typography>
      <Typography sx={{ pb: 1 }}>
        <strong>Vocational Education:</strong> Our vocational education programs equip learners with practical skills and knowledge required for specific trades and professions.
      </Typography>
      <Typography sx={{ pb: 1 }}>
        <strong>Corporate Training:</strong> We deliver tailored corporate training sessions aimed at improving employee performance and organizational effectiveness.
      </Typography>
      <Typography sx={{ pb: 1 }}>
        <strong>Placement and Manpower Solutions:</strong> We offer robust placement services and manpower solutions, ensuring the right talent meets the right opportunities.
      </Typography>
      <Typography variant="h5" sx={{ pb: 2 }}>
        Experience and Achievements:
      </Typography>
      <Typography>
        In the last 8 years, we have undertaken numerous assignments in skill development training, focusing on mobilization, placements, and channel management in regions including Delhi-NCR, Rajasthan, Punjab, Madhya Pradesh, and Chhattisgarh.
      </Typography>
    </Box>
    <Footer />
    </>
  )
}

export default Capabilities

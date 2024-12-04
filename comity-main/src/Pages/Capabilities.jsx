import React from 'react'
import TopTemplete from '../Components/utils/TopTemplete'
import { Box, Typography } from '@mui/material'
import { capabilityIntro } from '../Common/capabilities'
import Footer from '../Components/utils/Footer'
import { lightNavyBg } from '../Common/constants'

function Capabilities() {
  return (
    <>
    <TopTemplete
      background={"https://img.freepik.com/free-photo/selective-focus-computer-screen-with-startup-team-startup-employees-working-remote-group-video-call-brainstorming-ideas-african-american-woman-gesturing-internet-meeting-with-colleagues_482257-43390.jpg?t=st=1719492144~exp=1719495744~hmac=4cb553648578fd9ba52735925f478b3050e8d0d6c53d6e239d67f7889819d9fc&w=996"}
      title={"Comity Edutech and you"}
      tagLine={"Working together to deliver value to your business."} 
    />
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
      {
        capabilityIntro?.map((line) => 
          <Typography key={line.content}>
            {line.content}
          </Typography>
        )
      }
    </Box>
    <Footer />
    </>
  )
}

export default Capabilities
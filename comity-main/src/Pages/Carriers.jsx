import React from 'react'
import TopTemplete from '../Components/utils/TopTemplete'
import { Box, Button, Typography } from '@mui/material'
import { lightNavyBg, navyLogoColor } from '../Common/constants'
import Footer from '../Components/utils/Footer'
import { useNavigate } from 'react-router-dom'
import { contactRoute } from '../Common/routes'
import carrier from "../Common/images/pamphlet/carrier.jpg"

const Carriers = () => {

  const navigate = useNavigate();

  const goToContact = () => {
    navigate(contactRoute.path);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <TopTemplete
        background={carrier}
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
        marginY:"15px",
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
          Careers at Comity Edutech Services Private Limited
        </Typography>
        <Typography sx={{ pb: 3 }}>
          At Comity Edutech Services Private Limited, we are always seeking passionate and talented individuals interested in education and training. Whether you're looking for short-term opportunities or a long-term career, explore the exciting prospects we offer.
        </Typography>

        <Typography variant="h5" sx={{ pb: 2 }}>
          Why Join Us?
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Professional growth and development:</strong> We provide opportunities for continuous learning and career advancement.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Collaborative and supportive work environment:</strong> We believe in teamwork and providing the resources needed to succeed.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Competitive compensation and benefits:</strong> We offer attractive pay packages and benefits to our employees.
        </Typography>
        <Typography sx={{ pb: 1 }}>
          <strong>Opportunity to make a positive impact:</strong> Join us to help empower individuals and contribute to communities.
        </Typography>

        <Typography variant="h5" sx={{ pb: 2 }}>
          Career as an Employee
        </Typography>
        <Typography sx={{ pb: 3 }}>
          Join our team as an employee and contribute to our mission of empowering learners with the necessary skills and knowledge for their success.
        </Typography>

        <Typography variant="h5" sx={{ pb: 2 }}>
          Career as a Trainer or Assessor
        </Typography>
        <Typography sx={{ pb: 3 }}>
          We are looking for dynamic trainers for Food Safety Training & Certification (FoSTaC) and Hospitality Skill Training programs, as well as experienced assessors for FoSTaC and other skill programs. Help us deliver high-quality training and evaluate participants' competencies.
        </Typography>

        <Typography variant="h5" sx={{ pb: 2 }}>
          How to Apply
        </Typography>
        <Typography>
          For Employee Positions: Send your resume and cover letter to <strong>hr.comity@gmail.com</strong>.
        </Typography>
        <Typography>
          For Trainer or Assessor Positions: Send your resume and cover letter to <strong>comityedutech@gmail.com</strong>.
        </Typography>
        <Typography sx={{ pt: 3 }}>
          We look forward to welcoming dedicated and passionate professionals to our team!
        </Typography>
      </Box>
      {/* <Box sx={{
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
      </Box> */}

      <Footer />
    </>
  )
}

export default Carriers
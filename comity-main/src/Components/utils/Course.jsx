import React from 'react'
// import { useParams } from 'react-router-dom'
import TopTemplete from './TopTemplete';
import { Box, Typography } from '@mui/material';
import hsrt from '../../Common/images/projectImages/hsrt.jpg'
import { lightNavyBg } from '../../Common/constants';
import Footer from './Footer';
import ImgCarousel from './ImgCarousel';
import { items } from '../../Common/imgCarouse';

const Course = () => {
    // const { course } = useParams();

    const course = {
      title: 'HSRT',
      tag: 'Hunar Se Rozgar Tak',
      desc: ['In the year 2009-10, the Ministry of Tourism (MoT) launched a special initiative called “Hunar Se Rozgar Tak” (HSRT) for creation of employable skills amongst youth specific to Hospitality and Tourism Sector'],
      about: ['Skill Development: To provide short-term training to create a skilled workforce in the hospitality and tourism sectors.', 'Employment Generation: To enhance employment opportunities for the youth, especially from economically weaker sections.', 'Quality Improvement: To improve the quality of services in the hospitality and tourism industry.'],
      link: '',
      img: hsrt,
      slideImgs: items
    }

  return (
    <>
    <TopTemplete 
      background={"https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg"}
      title={"Comity Edutech and you"}
      tagLine={"Working together to deliver value to your business."}
    />
    <Box sx={{
      // background: lightNavyBg,
      paddingBlock: 4,
      paddingInline: {
        xs: 2,
        sm: 6,
        md: 10
      },
      '& > h2, & > h5, & > p': {
        paddingBlock: 1,
      },
      '& > h5': {
        color: 'gray'
      },
      '& > p': {
        fontSize: {
          xs: 16,
          sm: 18,
          md: 20
        }
      }
      
    }}>
      <Typography variant='h2'>
        {course.title} &rarr;
      </Typography>

      <Typography variant='h5'>
        {course.tag}
      </Typography>

      {
        course?.desc?.map((desc, index) => 
          <Typography key={index} >
            {desc}
          </Typography>
        )
      }

      <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: lightNavyBg,
        borderRadius: 2,
        marginBlock: 2,
        '& > img': {
          marginBlock: 2,
          width: {
            xs: '90%',
            sm: '75%',
            md: '60%'
          },
        }
      }}>
        <img src={course.img} alt="" />
      </Box>

      
      { 
        course?.about 
        && 
        <Typography variant='h5' style={{ color: 'black' }} >
          More Details &rarr;
        </Typography> 
      }
      {
        course?.about?.map((about, index) => 
          <Typography key={index}>
            {about}
          </Typography>
        )
      }

    </Box>

    {
      
    }
    <ImgCarousel items={items} />
    <Footer />
    </>
  )
}

export default Course
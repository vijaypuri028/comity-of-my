import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { lightNavyBg, navyLogoColor, navyTextColor } from '../../Common/constants'
import Footer from './Footer';

const inputBgColor = 'white';

const Contact = () => {
  return (
    <>
    <Box sx={{
      mt: '70px',
      background: lightNavyBg,
      // mb: 4,
      paddingBlock: {
        xs: 4,
        sm: 6,
        md: 8
      },
      paddingInline: {
        xs: 2,
        sm: 6,
        md: 10
      },
      marginInline: {
        xs: 2,
        sm: 6,
        md: 10
      },
      '& > h3': {
        color: navyLogoColor,
        fontSize: {
          xs: 36,
          sm: 42,
          md: 48
        }
      },
      '& > h4': {
        fontSize: {
          xs: 26,
          sm: 30,
          md: 34
        },
        paddingBlock: 2
      },
      '& > p': {
        color: 'gray'
      }
    }} >
      <Typography variant='h3' >
      Connect with us &rarr;
      </Typography>

      <Typography variant='h4'>
      How can we help?
      </Typography>

      <Typography>
      All fields are required
      </Typography>

      <Box sx={{
        width: {
          xs: '100%',
          sm: '80%',
          md: '60%'
        },
        paddingBlock: 2,
        // marginBlock: 4,
        '& > div': {
          // paddingBlock: 2,
          marginBlock: 2
        },
        '& > div > div > input': {
          background: inputBgColor,
        },
        
      }} >
        <TextField 
          required
          label="First Name"
          variant='filled'
          type='text'
          fullWidth
          />
        <TextField 
          required 
          label="Last Name" 
          variant='filled' 
          type='text' 
          fullWidth 
          />
        <TextField 
          required 
          label="Email" 
          variant='filled' 
          fullWidth 
          />
        <TextField 
          required
          multiline 
          label="Message" 
          variant='filled'
          rows={5}
          fullWidth 
          sx={{
            '& .MuiFilledInput-root': {
              background: inputBgColor,
              ':hover': {
                background: inputBgColor,
              },
            },
          }}
          />
        <Button variant='outlined' size='large' sx={{
          borderRadius: 0,
          marginBlock: 2,
          ':hover': {
            background: navyTextColor,
            color: lightNavyBg
          }
        }} >
          Send Message
        </Button>

      </Box>
    </Box>

    <Footer />
    </>
  )
}

export default Contact
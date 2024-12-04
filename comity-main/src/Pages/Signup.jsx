import { Box, Button, FormControl, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { lightNavyBg, navyLogoColor, navyLogoHoverColor } from '../Common/constants'
import { useNavigate } from 'react-router-dom'
import { loginRoute } from '../Common/routes'
import Footer from '../Components/utils/Footer'

const Signup = () => {

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate(loginRoute.path);
        window.scrollTo(0, 0);
    }
  return (
    <>
    <Box sx={{
        width: '100%',
        background: lightNavyBg,
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: {
            xs: 1,
            sm: 3,
            md: 5
        },
        alignItems: 'center',
    }}>
        <FormControl sx={{
            background: 'white',
            width: {
                xs: '90%',
                sm: '60%',
                md: '40%'
            },
            paddingInline: {
                xs: 2,
                sm: 5
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            paddingBlock: 3,
            mt: '70px',
            border: `2px solid ${navyLogoColor}`,
            '& > div': {
                background: 'white'
            },
            '& > button': {
                maxWidth: 150,
                marginInline: 'auto',
                background: navyLogoColor,
                textTransform: 'none',
                ':hover': {
                    background: navyLogoHoverColor
                }
            }
        }}>
                <Typography variant='h2' sx={{
                    color: navyLogoColor,
                    textAlign: 'center'
                }} >
                    Sign Up
                </Typography>
            <TextField label="First Name" type='text' fullWidth />
            <TextField label="Last Name" type='text' fullWidth />
            <TextField label="Email" type='email' fullWidth />
            <TextField label="Password" type='password' fullWidth />

            <Button type='submit' size='large' variant='contained' >Sign up</Button>
        </FormControl>

        <Typography sx={{
            pt: 2,
            color: 'gray',
            '& > a': {
                pl: 1,
                cursor: 'pointer'
            }
        }}>
            Already have an account? 
            <Link onClick={goToLogin}>Login</Link>
        </Typography>
    </Box>

    <Footer />
    </>
  )}

export default Signup
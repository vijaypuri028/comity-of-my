import { Box, Button, Typography } from '@mui/material'
import bgMaxWidth from '../../Common/images/fourthBlockBg/fourthBlockBgMaxWidth.jpg'
import bgMinWidth from '../../Common/images/fourthBlockBg/fourthBlockMinWidth.jpg'

const FourthBlock = ({ goToContact }) => {
  return (
    <Box sx={{
        height: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        color: 'white',
        mt: {
            xs: 5,
            sm: 7,
            md: 10
        },
        background: {
            xs: `url(${bgMinWidth})`,
            sm: `url(${bgMaxWidth})`
        },
        backgroundSize: {
            xs: 'cover',
            sm: 'cover'
        },
        '& > h4, & > p': {
            textShadow: '0 0 3px black'
        },
    }} >
        <Typography variant='h4'>
        Get in Touch
        </Typography>
        <Typography sx={{
            // fontSize: 14,
            maxWidth: 450,
            textAlign: 'center'
        }} >
        J-18 , J-Scheme, Bapuji Marg, Sahkar Marg,
Opp. NAV Back, Jaipur 302005, Rajasthan India

        </Typography>

        <Button onClick={goToContact} sx={{
        textTransform: 'none',
        borderRadius: 0,
        maxWidth: 150,
        mt: 2
    }} size='large' variant="contained">Contact Us</Button>
    </Box>
  )
}

export default FourthBlock
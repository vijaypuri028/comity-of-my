import { Box, Typography, Button, styled } from '@mui/material'
import { lightNavyBg, navyLogoColor, navyTextColor } from '../../Common/constants';
import { ArrowForwardIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { navRoutes } from '../../Common/routes';

const FirstBlock = ({ goToContact }) => {

    const navigate = useNavigate();

    const goToIndustries = () => {
        navigate(navRoutes[2].path);
        window.scrollTo(0, 0);
    }

    const mainBoxStyle = {
        background: lightNavyBg,
        width: '100%',
        height: 'calc(100vh-70px)',
        paddingBottom: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        position: 'relative',
        overflow: 'hidden',
        mt: '70px',
        '&:: before': {
            content: '""',
            width: {
                xs: 320,
                sm: 460,
                md: 620
            },
            height: {
                xs: 320,
                sm: 460,
                md: 620
            },
            borderRadius: '50%',
            background: 'white',
            position: 'absolute',
            left: {
                xs: '-20%',
                sm: '-2%',
                md: 0
            },
            top: {
                xs: '1%',
                sm: '-10%',
                md: '-20%'
            },
            zIndex: 0
        }
    }

    const sloganBox = {
        zIndex: 1,
        mt: 12,
        paddingBottom: 3,
        '& > h1, & > h2, & > h2 > span': {
            fontFamily: '-moz-initial',
        },
        '& > h1': {
            fontSize: {
                xs: 42,
                sm: 74,
                md: 96
            },
            mb: 2
        },
        '& > h2, & > h2 > span': {
            fontSize: {
                xs: 30,
                sm: 45,
                md: 60
            }
        }
    }

    const btnStyle = {
        textTransform: 'none',
        borderRadius: 0,
    }

    const StyledArrowBtn = styled(Box)({
        width: 120,
        display: 'flex',
        justifyContent: 'start',
        gap: 7,
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '& > p': {
            fontWeight: 500,
        },
        '&: after': {
            content: '""',
            position: 'absolute',
            width: 0,
            borderRadius: 5,
            height: 2,
            background: 'black',
            right: '17%',
            bottom: "50%",
            transform: 'translateY(50%)',
            transition: 'all 0.3s ease',
        },
        ': hover': {
            gap: 14
        },
        ': hover:: after': {
            width: '16px',
        },    
    })

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={sloganBox}>
        <Typography variant='h1' >Collaboratively!</Typography>
        <Typography variant='h2' ><Typography variant='h2' component='span' color={navyTextColor} >we</Typography> Redefined Parallel Paths</Typography>
    </Box>
    <Box sx={{
        display: 'flex',
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
        alignItems: {
            xs: 'start',
            sm: 'center',
        },
        gap: '20px',
        zIndex: 1,
    }} >
        <Button sx={btnStyle} onClick={goToContact} size='large' variant="contained">
            Contact Us
        </Button>
        <StyledArrowBtn onClick={goToIndustries} >
            <Typography>
            Explore Us
            </Typography>
            <ArrowForwardIos color={navyLogoColor} />
        </StyledArrowBtn>
    </Box>
    </Box>
  )
}

export default FirstBlock
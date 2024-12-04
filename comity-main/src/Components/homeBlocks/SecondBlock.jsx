import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { darkNavyBg, lightNavyBg, midDarkNavyBg, navyTextColor } from '../../Common/constants'
import { ArrowForward, FormatQuoteRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { navRoutes } from '../../Common/routes'
import Chart from '../utils/Chart'
import { useContext, useEffect } from 'react'
import industryContext from '../../context/admin/industryContext'

const SecondBlock = () => {

    const { allShowIndustries, getAllShowIndustries } = useContext(industryContext)

    useEffect(() => {
        getAllShowIndustries();
    }, [])

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate(navRoutes[1].path);
        window.scrollTo(0, 0);
    }

  return (
    <Box sx={{
        paddingBlock: {
            xs: 5,
            sm: 7,
            md: 10
        },
        paddingInline: {
            xs: 2,
            sm: 6,
            md: 10
        },
        // mt: {
        //     xs: 5,
        //     sm: 7,
        //     md: 10
        // },
        background: darkNavyBg,
        color: lightNavyBg,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    }} >
        <Box sx={{
            maxWidth: {
                sm: '100%',
                md: '52%',
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
        }} >

    {/* Welcome Section */}
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
            }} >
            <Box sx={{
                width: {
                    xs: 50,
                    sm: 75
                    },
                    height: 3,
                    background: navyTextColor,
                    borderRadius: 10,
                    }} />
            <Typography variant='h6'>
                Welcome to
            </Typography>
        </Box>

    {/* Heading Line Section */}
        <Typography variant='h3' sx={{
            fontSize: {
                xs: 36,
                sm: 42,
                md: 48
            }
        }} >
            The Comity Edutech
        </Typography>

    {/* Description Section */}
        <Typography>
        Comity Edutech Services Pvt. Ltd is the leading education advisory and consultancy service in Jaipur , (Rajasthan) and operational since year 2010 as a partnership firm. Comity Edutech was  incorporated as a Private Limited Company in year 2015 with a Vision  of becoming an Indian Originated Project Management Agency in near future.
        </Typography>

    {/* Card Section */}
        <Card>
            <CardContent sx={{
                background: midDarkNavyBg,
                color: lightNavyBg,
                display: 'flex',
                '& > svg': {
                    fontSize: {
                        xs: 30,
                        sm: 45,
                        md: 60
                    },
                    transform: 'rotate(180deg)',
                    color: darkNavyBg
                }
            }}>
                <FormatQuoteRounded />
                <Box>
                    <Typography>
                    “Infuse your business with a core set of values and principles for the greatest outcomes and success.”
                    </Typography>
                    <Typography sx={{
                        color: navyTextColor
                    }} >
                    - Vaibhav gupta (Managing Director)
                    </Typography>
                </Box>
            </CardContent>
        </Card>

        {/* Button Section */}
        <Button variant='outlined' onClick={goToAbout} sx={{
            maxWidth: 150,
            paddingInline: 0,
            mt: 5
        }} >
            Learn More
            <ArrowForward />
        </Button>
        </Box>

        {/* Chart Section */}
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: {
                xs: '100%',
                md: '48%'
            },
        }}>
            <Chart 
                data={allShowIndustries}
                width={400} 
                height={400} 
                innerRadius={60} 
                cx={'65%'}
            />
        </Box>
    </Box>
  )
}

export default SecondBlock
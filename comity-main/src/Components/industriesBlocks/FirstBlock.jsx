import { Box, Link, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import Chart from '../utils/Chart'
// import { industriesChartColors } from '../../Common/chartData'
import { lightNavyBg, navyLogoColor } from '../../Common/constants'
// import { industries } from '../../Common/industries'
import { SquareRounded } from '@mui/icons-material'

const FirstBlock = ({ allShowIndustries }) => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        background: lightNavyBg,
        m: 2,
        borderRadius: 5,
        marginBlock: {
            xs: 5,
            sm: 7,
            md: 10
        },
        flexWrap: 'wrap',
        paddingInline: {
            xs: 1,
            sm: 4,
            md: 8
        }
      }} >

        {/* List Section of Industries */}
        <List sx={{
            // paddingInline: 2,
            width: {
                xs: '100%',
                sm: '55%'
            },
            '& > h5': {
                mb: 4,
                mt: 2,
                color: navyLogoColor
            },
            '& > li': {
                fontSize: {
                    xs: 16,
                    sm: 17,
                    md: 18
                }
            },
            '& > li > svg': {
                mr: 1,
            },
            '& > li > a': {
                cursor: 'pointer'
            }
        }} >
            <Typography variant='h5' >
            Strategic Consultancy for Leading Industries &rarr;
            </Typography>

            {/* Industries List */}
            {
                allShowIndustries?.map((industry, index) => 
                    <ListItem key={index} >
                        <SquareRounded sx={{color: industry.color}} />
                        <Link color={navyLogoColor} >{industry.name}</Link>
                    </ListItem>
                )
            }
        </List>

        {/* Chart Section */}
        <Box sx={{
            width: {
                xs: '100%',
                sm: '45%'
            },
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Chart data={allShowIndustries} width={450} height={400} innerRadius={60} 
            cx={"62.5%"}
            />
        </Box>
      </Box>
  )
}

export default FirstBlock
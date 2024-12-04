import { ArrowForward } from '@mui/icons-material'
import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import { navyLogoColor, navyTextColor } from '../../Common/constants'

const CardBox = ({ card }) => {
  return (
    <Card variant='outlined' sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        p: '25px 10px',
        color: 'black',
        background: `url(${card.background})`,
        backgroundSize: '100% 100%',
        border: `2px solid ${navyLogoColor}`,
        ': hover': {
            border: `2px solid ${navyTextColor}`,
            color: navyLogoColor,
        }
    }} >
        <img width={80} src={card.icon} alt="" />

        <Typography variant='h4'>
        {card.title}
        </Typography>

        <Typography>
            {card.desc}
        </Typography>

        <Button variant='contained' sx={{
            maxWidth: 140,
            // paddingInline: 0,
            justifySelf: 'baseline',
            mt: 'auto'
        }} size='small' endIcon={<ArrowForward />} >
            Learn More
        </Button>
    </Card>
  )
}

export default CardBox
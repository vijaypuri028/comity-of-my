import { Box, Button, Card } from '@mui/material'
import { Typography } from 'antd'
import React, { useContext } from 'react'
import { greenColor, navyLogoColor, redColor } from '../../../Common/constants';
import aboutContext from '../../../context/admin/aboutContext';

const FONT_SIZE = 18;

const AboutCard = ({ about }) => {

    const { handleDelete, handleEditButton } = useContext(aboutContext);

  return (
    <>
    <Card sx={{
        width: '90%',
        p: 2,
        '& > article': {
            fontSize: FONT_SIZE
        },
        '& > button': {
            textTransform : 'none',
            marginInline: 1,
            marginTop: 1
        },
        '& > article > span, & > div > span': {
            fontSize: FONT_SIZE,
            pr: 1,
            fontWeight: 500,
            color: navyLogoColor
        }
    }}>
        <Typography>
            <Typography component='span' >
            Content : 
            </Typography>
            {about?.content}
        </Typography>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            paddingBlock: 2,
            '&  > article': {
                pl: 1,
                fontSize: FONT_SIZE,
            }
        }}>
            <Typography component='span' >
                Show This on website :
            </Typography>

            {about?.showThis ? 
                <Typography style={{
                    color: greenColor
                }} >YES</Typography>
            : 
                <Typography style={{
                    color: redColor
                }}>NO</Typography>
            }

        </Box>

        <Button size='large' variant='outlined' onClick={() => handleEditButton(about)}  >
            Edit
        </Button>

        <Button size='large' color='warning' variant='outlined' onClick={() => handleDelete(about._id)} >
            Delete
        </Button>
    </Card>
    </>
  )
}

export default AboutCard
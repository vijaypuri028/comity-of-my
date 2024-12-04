import { Box, Button, Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Typography } from 'antd'
import React, { useContext } from 'react'
import { greenColor, navyLogoColor, redColor } from '../../../Common/constants';
import industryContext from '../../../context/admin/industryContext';
import { SquareRounded } from '@mui/icons-material';

const FONT_SIZE = 18;

const IndustryCard = ({ industry }) => {
    const { handleDelete, handleEditButton } = useContext(industryContext);

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
    {/* Industry Name */}
          <Typography>
              <Typography component='span' >
              Industry : 
              </Typography>
              {industry?.name}
          </Typography>
  
    {/* Description section */}
          <Typography>
              <Typography component='span' >
              Description : 
              </Typography>
              {industry?.desc}
          </Typography>
  
    {/* Scheme section */}
          <Typography>
              <Typography component='span' >
              Scheme : 
              </Typography>
              {industry?.scheme}
          </Typography>
          
    {/* Course section */}
          <Typography>
              <Typography component='span' >
              Courses : 
              </Typography>
              <List>
                {
                    industry?.courses?.map((course, index) =>
                        <ListItem key={index} >
                            <ListItemIcon>{index+1}.</ListItemIcon>
                            <ListItemText>{course}</ListItemText>
                        </ListItem>
                    )
                }
              </List>
          </Typography>
          
    {/* Label section */}
          <Typography>
              <Typography component='span' >
              Label : 
              </Typography>
              {industry?.label}
          </Typography>

    {/* Label section */}
          <Typography style={{
            display: 'flex',
            alignItems: 'center'
          }}>
              <Typography component='span' >
              color : 
              </Typography>
              <SquareRounded sx={{ color: industry.color, mr: 1 }} />
              {industry?.color}
          </Typography>

    {/* Show this on website on not section */}
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
  
              {industry?.showThis ? 
                  <Typography style={{
                      color: greenColor
                  }} >YES</Typography>
              : 
                  <Typography style={{
                      color: redColor
                  }}>NO</Typography>
              }
  
          </Box>
  
          <Button size='large' variant='outlined' onClick={() => handleEditButton(industry)}  >
              Edit
          </Button>
  
          <Button size='large' color='warning' variant='outlined' onClick={() => handleDelete(industry._id)} >
              Delete
          </Button>
      </Card>
      </>
    )
}

export default IndustryCard
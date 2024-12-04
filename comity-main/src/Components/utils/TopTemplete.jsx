import { Box, Typography } from '@mui/material'
import { darkNavyBg, lightNavyBg } from '../../Common/constants'

const TopTemplete = ( { background, title, tagLine } ) => {
  return (
    <Box sx={{
        mt: '70px',
        width: '100%',
        height: {
          xs: 400,
          sm: 500,
          md: 600
        },
        background: `url(${background})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end'
  
      }}>
        <Box sx={{
          background: darkNavyBg,
          color: lightNavyBg,
          textShadow: '0 0 2px black',
          maxWidth: {
            xs: '90vw',
            sm: '75vw',
            md: '60vw'
          },
          paddingBlock: {
            xs: 2,
            sm: 5,
            md: 9
          },
          textAlign: 'center'
        }} >
          <Typography sx={{
            fontSize: {
              xs: 34,
              sm: 40,
              md: 48
            }
          }} variant='h3' >
            {title}
          </Typography>
          <Typography variant='h6' sx={{
            fontSize: {
              xs: 18,
              sm: 20,
              md: 22
            }
          }} >
            {tagLine}
          </Typography>
        </Box>
      </Box>
  )
}

export default TopTemplete
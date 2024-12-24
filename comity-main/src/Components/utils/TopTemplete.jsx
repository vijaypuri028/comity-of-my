import { Box, Typography } from '@mui/material'
import { darkNavyBg, lightNavyBg } from '../../Common/constants'

const TopTemplete = ( { background, title, tagLine } ) => {
  return (
    <Box sx={{
        // mt: '70px',
        width: '100%',
        height: {
          xs: 400,
          sm: 500,
          md: 700
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
            xs: '80vw',
            sm: '65vw',
            md: '50vw'
          },
          paddingBlock: {
            xs: 3,
            sm: 2,
            md: 5
          },
          textAlign: 'center',
          maxHeight:{
            xs:80,
            sm:100,
            md:150

          }
        }} >
          <Typography sx={{
            fontSize: {
              xs: 26,
              sm: 32,
              md: 40
            }
          }} variant='h3' >
            {title}
          </Typography>
          <Typography variant='h6' sx={{
            fontSize: {
              xs: 12,
              sm: 16,
              md: 18
            }
          }} >
            {tagLine}
          </Typography>
        </Box>
      </Box>
  )
}

export default TopTemplete
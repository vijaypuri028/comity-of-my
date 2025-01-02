import { Carousel } from 'antd'
import { Box } from '@mui/material'

const ImgCarousel = ({ items, bgColor, marginY }) => {
  return (
    <Box sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: bgColor,
        marginY:marginY,
        
        paddingInline: {
            xs: 0,
            sm: 6,
            md: 10
        },
        borderBottom: '1px solid white',
        '& > div': {
            width: '100%',
            height: {
                md: 'calc(100vh - 70px)' 
            }
        },
        '& > div > div': {
            borderTopRightRadius: {
                xs: 0,
                sm: 4,
            },
            borderTopLeftRadius: {
                xs: 0,
                sm: 4,
            },
            width: '100%',
            height: {
                md: 'inherit' 
            },
            overflow: 'hidden'
        }
    }}>

    <Carousel autoplay autoplaySpeed={1500} arrows={true} adaptiveHeight={true}  >
        {
            items?.map(item => 
                <div style={{background: 'red'}} key={item.id}>
                <img width={'100%'} height={"inherit"} src={item.src} alt='' style={{
                    opacity: 0.8,
                    filter: 'brightness(70%)',
                }} />
                </div>
            )
        }
    </Carousel>
    </Box>
  )
}

export default ImgCarousel
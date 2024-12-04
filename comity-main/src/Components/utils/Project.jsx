import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import { lightNavyBg } from '../../Common/constants'

const Project = ({ project }) => {
  return (
    <Box sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap-reverse',
        background: lightNavyBg,
        paddingInline: {
            xs: 2,
            sm: 6,
            md: 10
        }

    }} >
        {/* Text Section  */}
        <Box sx={{
            width: {
                xs: '100%',
                sm: '52%'
            },
            paddingBlock: {
                xs: 2,
                sm: 0
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            // paddingInline: {
            //     xs: 2,
            //     sm: 3,
            //     md: 7
            // },
            minHeight: {
                xs: 350,
                sm: 400,
                md: 450
            },
            '& > h4': {
                fontSize: {
                    xs: 24,
                    sm: 28,
                    md: 32
                }
            },
            '& > h6': {
                fontSize: {
                    xs: 18,
                    sm: 20,
                    md: 22
                }
            },
            '& > p': {
                fontSize: {
                    xs: 14,
                    sm: 16,
                    md: 18
                }
            },
            '& > button': {
                maxWidth: 120
            }
        }}>
            <Typography variant='h4'>
            {project?.title}
            </Typography>
            <Typography variant='h6'>
                {project?.tag}
            </Typography>
            <Typography>
            {project?.desc}
            </Typography>

            <Button variant='outlined' endIcon={<ArrowForward />} size='small' >
                Explore
            </Button>
        </Box>

        {/* Image Section */}
        <Box sx={{
            width: {
                xs: '100%',
                sm: '48%'
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > img': {
                width: {
                    xs: 170,
                    sm: 230,
                    md: 340
                },
                height: {
                    xs: 170,
                    sm: 230,
                    md: 340
                },
                borderRadius: 4
            }
        }}>
            <img src={project?.img} alt="" />
        </Box>
    </Box>
  )
}

export default Project
import { Drawer, IconButton, List, ListItem } from '@mui/material'
import { navRoutes } from '../../Common/routes'
import { ArrowBack } from '@mui/icons-material'
import { lightNavyBg, navyLogoColor } from '../../Common/constants'
import { NavLink } from 'react-router-dom'

const listStyle = {
    '& > li': {
        display: 'flex',
        justifyContent: 'center',
        '&: hover': {
            background: lightNavyBg
        },
        '& > a': {
            textDecoration: 'none',
            color: navyLogoColor
        }
    },
}

function DrawerNavbar({ openDrawer, toggleDrawer }) {
  return (
    // Navbar Options For Mobile Screens 
    <Drawer
        anchor='top'
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{keepMounted: true}}
        variant='persistent'
        // sx={{display: {sm: 'none'}}}
    >
        <List sx={listStyle}>
            <IconButton onClick={toggleDrawer} sx={{color: navyLogoColor}}>
                <ArrowBack />
            </IconButton>
            {
                navRoutes.map(option => (
                    <ListItem key={option.name}>
                        <NavLink to={option.path} onClick={toggleDrawer} >{option.title}</NavLink>
                    </ListItem>
                ))
            }
        </List>
    </Drawer>
  )
}

export default DrawerNavbar
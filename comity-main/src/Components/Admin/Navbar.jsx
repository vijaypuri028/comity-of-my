import { AppBar, Box, Toolbar, styled } from '@mui/material';
import NavbarContent from '../navbar/NavbarContent';
import { useNavigate } from 'react-router-dom';
import logo from '../../Common/images/logos/comity2.png'
import { adminOptionRoutes } from '../../Common/routes';

const StyledAppBar = styled(AppBar)({
  boxShadow: 'none'
})

const StyledToolbar = styled(Toolbar)({
  height: 70,
  display:'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #eee',
})

const LogoBox = styled(Box)({
  cursor: 'pointer',
  '& > img': {
    width: 130,
    height: 65,
  },
})
    
const navOptions = {
  display: {
    xs: 'none',
    sm: 'flex'
  },
  height: '100%', 
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <StyledAppBar color='action' position='static' >
      <StyledToolbar>

        {/* Logo Section */}
      <LogoBox onClick={() => navigate('/')} >
        <img src={logo} alt="" />
      </LogoBox>

      {/* Navbar Options */}
      <Box sx={navOptions} >
        {
          adminOptionRoutes.map(route => 
            route.name!=='home' ? <NavbarContent key={route.name} content={route} /> : ''
          )
        }
      </Box>

      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Navbar
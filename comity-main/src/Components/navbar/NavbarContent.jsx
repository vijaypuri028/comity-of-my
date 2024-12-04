import { styled } from '@mui/material';
import { lightNavyBg, navyLogoColor, navyTextColor } from '../../Common/constants';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    fontSize: '1.1rem',
    color: navyLogoColor,
    cursor: 'pointer',
    paddingInline: 12,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:: before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: 2,
        background: navyTextColor,
        right: '100%',
        bottom: 0,
        transition: 'all 0.3s'
    },
    '&:: after': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: 2,
        background: navyTextColor,
        left: '100%',
        top: 0,
        transition: 'all 0.3s'
    },
    '&: hover': {
      background: lightNavyBg,
    },
    '&: hover:: before': {
        right: 0
    },
    '&: hover:: after': {
        left: 0
    },
})

function NavbarContent({content}) {
  return (
    // Single Navbar Content for Max-Width
    <StyledNavLink to={content.path} onClick={() => window.scrollTo(0, 0)} >
        {content.title}
    </StyledNavLink>
  )
}

export default NavbarContent
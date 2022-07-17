import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Logo from './Logo'
import {
  dFlex,
  flexBetweenCenter,
  displayOnDesktop,
  displayOnMobile,
} from 'themes/commonStyles'
import LocationSearch from './LocationSearch'
import ProfileSettings from './ProfileSettings'
import MobileSearch from './MobileSearch'

const Header = () => {
  return (
    <Box
      sx={{
        ...dFlex,
        minHeight: 70,
        borderBottom: '1px solid #ddd',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            ...flexBetweenCenter,
            minHeight: 90,
            px: 4,
          }}
        >
          <Logo displayType={displayOnDesktop} />
          <LocationSearch displayType={displayOnDesktop} />
          <ProfileSettings displayType={displayOnDesktop} />
          <MobileSearch displayType={displayOnMobile} />
        </Box>
      </Container>
    </Box>
  )
}

export default Header

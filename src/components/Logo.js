import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FaAirbnb } from 'react-icons/fa'
import { pink } from '@mui/material/colors'

import { flexCenter } from '../themes/commonStyles'

const Logo = ({ displayType }) => {
  return (
    <Box sx={(flexCenter, displayType)}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography
        sx={{
          ml: 1,
          fontSize: '20px',
          fontWeight: 'bold',
          color: (theme) => theme.palette.secondary.main,
        }}
        component="h3"
      >
        airBnb
      </Typography>
    </Box>
  )
}

export default Logo

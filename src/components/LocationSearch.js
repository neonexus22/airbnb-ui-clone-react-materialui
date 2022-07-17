import React from 'react'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { IoSearchCircleSharp } from 'react-icons/io5'
import { pink } from '@mui/material/colors'

const choices = [
  { id: 1, text: 'Anywhere' },
  { id: 2, text: 'Any week' },
  { id: 3, text: 'Any guest', withIcon: true },
]

const LocationSearch = ({ displayType }) => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        ml: 15,
        ...displayType,
      }}
      elevation={3}
    >
      <Stack
        sx={{
          borderRadius: 20,
          pl: 2,
        }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {choices.map((choice) => (
          <Button key={choice.id}>
            <Typography
              sx={{
                fontWeight: 'bold',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {choice.text}
            </Typography>
            {choice.withIcon && (
              <Box
                sx={{
                  m: 1,
                }}
              >
                <IoSearchCircleSharp size={32} color={pink[500]} />
              </Box>
            )}
          </Button>
        ))}
      </Stack>
    </Paper>
  )
}

export default LocationSearch

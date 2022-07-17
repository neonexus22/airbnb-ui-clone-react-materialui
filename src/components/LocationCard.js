import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { locations as cardLocations } from 'data/mock-data'
import CarousalCard from './CarousalCard'

const LocationCard = () => {
  const [cards, setCards] = useState(cardLocations)
  if (!cards.length) {
    return null
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarousalCard location={location} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default LocationCard

import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Tabs, { tabsClasses } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Button from '@mui/material/Box'
import Container from '@mui/material/Container'

import { FaFilter } from 'react-icons/fa'
import { locationsTab } from 'data/mock-data'

const OptionsTab = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: 'center',
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {locationsTab.map((tab) => {
            return <Tab key={tab.id} icon={tab.icon} label={tab.label} />
          })}
        </Tabs>
        <Button
          sx={{
            display: { xs: 'none', md: 'flex' },
            border: '1px solid #ddd',
            minWidth: 90,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            textTransform: 'capitalize',
            py: 1,
            color: 'theme.palette.text.primary',
            cursor: 'pointer',
          }}
        >
          <FaFilter /> <Box sx={{ ml: 1 }}>Filters</Box>
        </Button>
      </Box>
    </Container>
  )
}

export default OptionsTab

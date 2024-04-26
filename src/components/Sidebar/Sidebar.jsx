import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { red, blue, green } from '@mui/material/colors';

const style = {
  backgroundColor: blue.A200
};

const Sidebar = () => {
  return (
    <Box sx={{"width": "100vw", "height": "100vh", "position": "fixed", "backgroundColor": style.backgroundColor, "top": "0", "left": "-16px", "zIndex": "100"}} marginLeft={0} >
      <Stack spacing={4} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{"width": "100%", "height": "100%"}}>
        <NavLink to="/"><Typography>Main</Typography></NavLink>
        <NavLink to="/search"><Typography>Search</Typography></NavLink>
        <NavLink to="/warning"><Typography>Warn</Typography></NavLink>
      </Stack>
    </Box>
  )
}

export default Sidebar
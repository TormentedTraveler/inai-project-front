import { Box, Container, Stack } from '@mui/material'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Box sx={{"position": "relative", "padding": "0", "margin": 0}}>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"}>
        <Box sx={{
        }}>
          Logo
        </Box>

        {isOpen ? <Sidebar></Sidebar> : <></>}
        <Box sx={isOpen ? {"color": "white", "zIndex": "101"} : {"color": "black"}}>
          <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
        </Box>
      </Stack>
      {children}
    </Box>
  )
}

export default Layout
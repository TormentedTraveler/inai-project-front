import { Box, Container, Stack } from '@mui/material'
import Hamburger from 'hamburger-react'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import logo from '../../img/logo.png'

const Layout = ({children}) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Box sx={{"position": "relative", "padding": "0", "margin": 0}}>
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"} sx={{"backgroundColor": "#F9F7F7"}}>
        <Box sx={{
          width: "200px"
        }}>
          <img src={logo} alt="logo" style={{"width": "100%"}} />
        </Box>

        <Box sx={{transitionDuration: "1s"}}>
          <Sidebar closeSidebar={()=>setOpen(false)} sidebarState={isOpen}></Sidebar>
        </Box>
        
        <Box sx={isOpen ? {"color": "white", "zIndex": "101"} : {"color": "black"}}>
          <Hamburger toggled={isOpen} toggle={() => {
            setOpen(!isOpen) 
            }} />
        </Box>
      </Stack>
      {children}
    </Box>
  )
}

export default Layout
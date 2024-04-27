import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { red, blue, green } from '@mui/material/colors';

// [
//   {url, fullName, }
// ]

const style = {
  backgroundColor: blue.A100
};

let closedStyle = {"width": "100vw", "height": "100vh", "position": "fixed", "backgroundColor": style.backgroundColor, "top": "0", "left": "-100vw", "zIndex": "100", transition: 'left 0.5s ease-in-out'}
let openedStyle = {"width": "100vw", "height": "100vh", "position": "fixed", "backgroundColor": style.backgroundColor, "top": "0", "left": "0px", "zIndex": "100", transition: 'left 0.5s ease-in-out'}

const Sidebar = ({closeSidebar, sidebarState}) => {
  return (
    <Box sx={sidebarState ? openedStyle : closedStyle} marginLeft={0}>
      <Stack spacing={4} direction={"column"} alignItems={"center"} justifyContent={"center"} sx={{"width": "100%", "height": "100%"}}>
        <NavLink to="/" onClick={closeSidebar}><Button variant="outlined"><Typography variant="h6" color="white">Главная</Typography></Button></NavLink>
        <NavLink to="/cards" onClick={closeSidebar}><Button variant="outlined"><Typography variant="h6" color="white">Пропашие Люди</Typography></Button></NavLink>
        <NavLink to="/addPerson" onClick={closeSidebar}><Button variant="outlined"><Typography variant="h6" color="white">Добавить Человека</Typography></Button></NavLink>
        <NavLink to="/demonstration" onClick={closeSidebar}><Button variant="outlined"><Typography variant="h6" color="white">Демонстрация</Typography></Button></NavLink>
      </Stack>
    </Box>
  )
}

export default Sidebar
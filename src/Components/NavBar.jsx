import styled from '@emotion/styled'
import { Pets } from '@mui/icons-material'
import { AppBar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import MailIcon from '@mui/icons-material/Mail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const StyledToolbar= styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});
const Search= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    width:"40%",
    borderRadius:"3px"
}));
const Icons= styled(Box)(({ theme })=>({
    display:'none',
    gap:'10px',
    alignItems:'center',
}));
const UserBox= styled(Box)(({theme})=>({
    display:'flex',
    gap:'20px',
    alignItems:'center'
}));
const NavBar = () => {
    const[open, setOpen]=useState(false);
  return (
    <AppBar position='fixed'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Mubu</Typography>
            <Pets sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='Search ......'/></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <MailIcon />
                </Badge>
                <Badge badgeContent={10} color='error'>
                    <CircleNotificationsIcon />
                </Badge>
                <Badge  color='error'>
                    <PersonOutlineIcon />
                </Badge>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <PersonOutlineIcon />
                <Typography variant='span'>Mirare</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar
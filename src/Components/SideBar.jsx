import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SideBar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{ xs:"none", sm:"block"}}}>
        <Box sx={{position:"fixed"}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SummarizeIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <GroupsIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <StoreIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountCircleIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <NightlightIcon/>
              </ListItemIcon>
              <Switch {...label} defaultChecked />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default SideBar
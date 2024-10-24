import { Box, Button, Container, Stack } from '@mui/material'

import SideBar from './Components/SideBar'
import RightBar from './Components/RightBar'
import Feeds from './Components/Feeds'
import NavBar from './Components/NavBar'


function App() {
  

  return (
    <>
      <div>
        <NavBar />
        <Box>
          <Stack direction="row" spacing={2} justifyContent="space-between">
              <SideBar/>
              <Feeds/>
              <RightBar/>
          </Stack>
        
        </Box>
      </div>
    </>
  )
}

export default App

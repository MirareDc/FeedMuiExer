import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feeds = () => {
  return (
    <Box flex={4} p={2} pb={2}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}

export default Feeds
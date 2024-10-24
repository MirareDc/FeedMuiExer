import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Post = () => {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="600px"
        image="https://picsum.photos/200/200?random"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card> 
  )
}

export default Post
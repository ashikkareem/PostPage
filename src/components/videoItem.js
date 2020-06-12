import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core";


 const videoItem = ({video, onVideoSelect}) => {


  return (
    <Grid item >
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography  variant="caption"   style={{ fontSize: '0.7rem', cursor: "pointer" , paddingRight:20}}>
          {video.snippet.title}
          
        </Typography>
      </Paper>
      
    </Grid>
  )
}

export default videoItem;

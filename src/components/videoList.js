import React from 'react'
import VideoItem from './videoItem';
import { Grid } from "@material-ui/core";



 const videoList = ({videos, onVideoSelect}) => {
  
  const listOfVideos= videos.map((video, id)=> <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} /> )
  
  
  return (
    <Grid container spacing = {10} > 
    {listOfVideos}
    </Grid>
    )
  
}
export default videoList;

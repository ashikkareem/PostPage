import React, {Fragment} from 'react';
import {Paper, Typography} from '@material-ui/core';



 const videoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;


  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;;
  

  
  return (
    <Fragment>
     <Paper elevation={6} style={{height: '60%'}}>
     <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
     </Paper>

     <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="subtitle1">
         <b>{video.snippet.title} - {video.snippet.channelTitle}</b> 
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>

    </Fragment>  
  )
}

export default videoDetails;
import React, {Fragment} from 'react';
import {Paper, Typography} from '@material-ui/core';

const styles = theme => ({
  root: {
      background: 'white',
      position: '-webkit-sticky',
      position: 'sticky',
      top: 20,
      bottom: 20, 
      paddingTop: '40px',
      paddingBottom: '40px',
      zIndex: 5,
  },
  details: {
      display: 'flex'
  },
  progressWrapper: {
      marginTop: theme.spacing(2)
  },
  linearProgress: {
      height: 20
  },
});

 const videoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;


  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;;
  

  
  return (
    <Fragment >
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
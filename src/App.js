import React from 'react';

import { Grid , Avatar} from '@material-ui/core';

import { Title, VideoDetails, VideoList , Avat} from './components/index';

import './App.css'



import Youtube from './api/trustVideo'; 


class App extends React.Component{
   

  state={
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){

    this.handleSubmit();
  }
  onVideoSelect = (video)=>{

    this.setState({selectedVideo:video })
  }
  handleSubmit= async( searchTerm )=>{
    const response = await Youtube.get('search', {
      params: {
        part: "snippet",
        maxResults: 10,
        key: 'AIzaSyBEt1flDsHA3L2YXVt8BrCguW_2Mx5gY8s',
        q: searchTerm,
      }

    })
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})

  };

  render(){

  
    const { selectedVideo, videos } = this.state;
    return(
     <Grid justify='center' container spacing={10}>
       
       <Grid item xs={12} >
         
         <Grid container spacing={10}>
         <Grid item xs ={12} lg={1}>
         <Avat />
          </Grid>
           <Grid item xs ={12} lg={11}>
              <Title onFormSubmit={this.handleSubmit}/>
            </Grid>
            </Grid>

            <Grid container  spacing={10} >
            <Grid item xs ={12} lg={8}  className='sticky'>
              
              <VideoDetails video={selectedVideo}/>
            </Grid>
            

            <Grid item xs ={10} lg={4} >
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
           </Grid>
         </Grid>

     </Grid>



      )
  }
}


export default App;
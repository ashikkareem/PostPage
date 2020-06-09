import React from 'react';

import {Paper, TextField, Typography} from '@material-ui/core';

class  title extends React.Component {

  state={
    searchTerm:''
  }

   handleChange = (e)=> this.setState({searchTerm:e.target.value});

   handleSubmit = (e) =>{
     const {searchTerm} = this.state;
     console.log(searchTerm);
     const {onFormSubmit} = this.props;
     onFormSubmit(searchTerm);
     e.preventDefault();
     
   }

  render(){
  return (
    <Paper elevation={6} style={{padding:'25px'}}>
       <Typography variant="h4">
          <b>Trust title</b>
        </Typography>       

      {/* <form onSubmit={this.handleSubmit}>
        <TextField fullWidth label ='Search...' onChange={this.handleChange}/>
      </form> */}
    </Paper>
    
  )
}
}

export default title;

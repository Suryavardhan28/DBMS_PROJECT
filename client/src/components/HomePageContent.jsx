import React from 'react';
import mobile from '../images/mobile.jpg';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';




const useStyles = makeStyles(() => ({
  image: {
        backgroundImage: `url(${mobile})`,
        minHeight: '80.8vh',
        minWidth: '100vw',
        backgroundPosition: 'center center',
        backgroundSize: '100vw',
      },   
 
  }
));
function HomePage() {
    const classes= useStyles();
    
    
    
    return (
  <Grid container>
          
         
          
          <Grid item container>
            <Grid item className={classes.image}>
            <h1 style={{color:"#ffffff",fontSize:"5rem",textAlign:"center",paddingTop:"17vh",fontFamily: 'Anton',}}>DO SOMETHING <br></br> <span style={{color:"#B6AFAF",fontFamily: 'Anton',fontSize:"7rem"}}>GREAT</span></h1>
            </Grid>
          </Grid>
         
        </Grid>
        
        
    )
}

export default HomePage

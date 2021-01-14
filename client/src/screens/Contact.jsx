import { Card,CardContent, Grid,Typography, makeStyles, Button } from '@material-ui/core'
import Header from '../components/Header.jsx'
import React, {useState,useContext} from 'react'

import Footer from '../components/Footer.jsx';
import { UserContext } from '../userContext';
import axios from 'axios';


const useStyles = makeStyles(() => ({

  root: {
    minWidth:"32vw",
    maxWidth:"33vw",
    minHeight:"20vh",
    margin:"0px",
    fontFamily:"sans-serif",
  }, 
  title:{
    fontSize:"20px",
    textAlign:"center",
    fontWeight:"700px",
    color:"black",
    fontFamily:"sans-serif",
  },
  subtitle:{
    fontSize:"1rem",
    textAlign:"center",
    fontWeight:"400",
    color:"black",
    fontFamily:"sans-serif"
  },
  button:{
    marginLeft:"10.5vw",
    '&:hover':{
      backgroundColor:"#EAEDED",
    }
  },
  button2:{
    marginLeft:"10.5vw",
    '&:hover':{
      backgroundColor:"#EB984E",
    }
  },
  input:{
    width:"50vw",
    fontSize:'1.2rem',
    padding:"5px 0",
    margin:"10px 0",
    textAlign:'center',
    display:'block',
    marginLeft:"23vw",
  },
  label:{
    fontSize:"1.2rem",
    textAlign:'center',
    marginLeft:"23vw",
  },
  submit: {
    padding:"5px 10vw",
    
    marginRight:"0",
    color:"#ffffff",
    backgroundColor:"#000000",
    fontSize:"1.2rem",
    '&:hover':{
      backgroundColor:"#D6D4D4",
      color:"#000000",
      cursor:"pointer",
    }
  },
}));
export default function Contact() {
  const classes= useStyles();
  const { userstore } = useContext(UserContext);
  console.log(userstore)
  const [name,setName] = useState('');
const [email,setEmail] = useState(''); 
const [message,setMessage] = useState(''); 
const Submit = (e)=> {
    e.preventDefault();
   axios
   .post('http://localhost:5000/feedback', {
       name:name,
     email:email,
     message:message
     
   })
   .then((response) => {
      console.log(response.data)
   })
   .catch((error) => {
     window.alert("Incorrect Details");
   });
   };
  return(

    <Grid container>

      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid container xs={12} style={{marginTop:"45px"}} justify="center" >
          <Grid>
          <h1 style={{paddingLeft:"38vw",paddingBottom:"20px" , fontSize:"38px"}}> CONTACT <span  style={{color:"#ffffff",backgroundColor:"#000000",padding:"0 5px"}} > US  </span>   </h1>        
                    
                  <Grid container justify="center">
                    <Grid item xs={12}  style={{fontSize:"25px",paddingBottom:"20px"}}>
                    <label className={classes.label}>NAME</label>
              <input
              className={classes.input}
              placeholder="SAMSUNG"
                id="name"
                label="FULL NAME"
                name="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                  }}
              />
            </Grid>

                    <Grid item xs={12} style={{fontSize:"25px",paddingBottom:"20px"}}>
                      <label className={classes.label}>EMAIL</label>
              <input
            className={classes.input}
            placeholder="EMAIL"
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                  }}
              />
            </Grid>
                  
            <Grid item xs={12} style={{fontSize:"25px",paddingBottom:"20px"}}>
            <label className={classes.label}>MESSAGE</label>
              <input
              style={{height:"10vw",}}
            className={classes.input}
            placeholder="ENTER YOUR MESSAGE HERE"
                id="message"
                type="form"
                label="comments"
                name="message"
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                  }}
              />
            </Grid>
            </Grid>
                    <Grid container justify="center">
                      <Button
                      className={classes.submit}
            type="submit"
            variant="contained"
            color="tan"
            style={{marginBottom:"60px",marginTop:"25px"}}
            onClick={Submit}
            disabled={!userstore.user || !name || !email || !message}
          >
            Submit
          </Button>
                    </Grid>
                   
          </Grid>
                    <Grid  container>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#EAEDED",paddingBottom:"1vh"}}>
                <CardContent>
               
                  <Typography className={classes.title} gutterBottom>
                    Location
                  </Typography>
                  
                  <Typography className={classes.subtitle}>
                    #69,1st Main,3rd Cross,MG Road,near Church Street,Bangalore-560032
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#000000",paddingBottom:"1vh"}}>
                <CardContent>
                 
                  <Typography className={classes.title} style={{color:'#ffffff'}} gutterBottom>
         Phone Number
        </Typography>
                  
                  <Typography className={classes.subtitle} style={{color:'#ffffff'}} gutterBottom> 
                    (960074)-248765                
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
            <Grid xs={4}>
                <Card className={classes.root} style={{backgroundColor:"#EAEDED",paddingBottom:"1vh"}}>
                <CardContent >
           
                  <Typography className={classes.title}  gutterBottom>
          Email
        </Typography>     
                  <Typography className={classes.subtitle}>
                  SamsungMobiles@gmail.com
                  </Typography>
                </CardContent> 
              </Card>
            </Grid>
          </Grid>                 
          </Grid>
          <Grid container>
            <Footer/>
          </Grid>
    </Grid>
  )
}
import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';
import axios from 'axios';
import { useHistory } from "react-router-dom"


function Copyright() {
  return (
    <Typography color="textprimary" align="center" style={{fontFamily:'Oswald'}}>
      Copyright © 
      <Link color="primary" to='/' style={{color:"#000000",fontWeight:"700",textDecoration:"none",fontFamily:'Oswald'}}>
        SAMSUNG
      </Link>{'  '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
 
  root: {
    height: '100vh',
    backgroundColor:"#000000",
   
  },
  paper: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', 

    outlineColor:"000000",
    border:'#000000',
  },
  submit: {
    margin: theme.spacing(3, 0, 2), //spacing(top,rightleft,bottom)
    color:"#ffffff",
    backgroundColor:"#000000",
    fontSize:"0.9rem",
    '&:hover':{
      backgroundColor:"#D6D4D4",
      color:"#000000",
      cursor:"pointer",
    }
  },
  input:{
    width:"100%",
    fontSize:'0.8rem',
    padding:"5px 0",
    margin:"10px 0",
    textAlign:'center',

  },
  label:{
    fontSize:"0.8rem",
    textAlign:'center',
  },
  spam:{
    backgroundColor:"#000000",
    color:"#ffffff",
    borderRadius:"6px",
    marginLeft:"5px",
    padding:"0 5px",
    '&:hover':{
      backgroundColor:"#ACABAB",
      color:"#000000",
      cursor:"pointer",
    }
  },
}));
const SignUp = () => {
  const classes = useStyles();
  const history=useHistory();
  const { dispatch } = useContext(UserContext);
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/Register', {
    name:userName,
    email,
    password,
    phonenumber,
    })
    .then((response) => {
       dispatch({type:'addUser', payload:{name:response.data.data.name,id:response.data.data.userid}});
       history.push('/')
    })
    .catch((error) => {
      return error.response;
    });
  };
  return (
    <Grid container component="main" className={classes.root}  style={{paddingTop:"5vh",paddingLeft:"35vw"}}>
     <CssBaseline />
      
      <Grid item xs={4} style={{backgroundColor:'#ffffff',padding:"0 20px",maxHeight:'90vh',borderRadius:"10px",minWidth:"30vw"}}>
        <div className={classes.paper}>

        <Typography component="h1" variant="h5" style={{fontSize:"3rem",color:"#000000",fontFamily:"sans-serif",padding:"0",marginTop:"20px"}}>
            <p style={{borderRadius:'10px',marginBottom:"10px"}}>Sign <span style={{color:"#ffffff",backgroundColor:'#000000'}}>up</span></p>
          </Typography>


          <form className={classes.form} noValidate>
            
            <label  className={classes.label}>NAME</label>
            <input
               className={classes.input}
              name="userName"
              value={userName}
              label="Name"
              type="text"
              id="userName"
              placeholder="SAMSUNG"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label  className={classes.label}>EMAIL</label>
            <input
             className={classes.input}
              id="email"
              placeholder="welcometosamsung@gmail.com"
              label="Email Address"
              type="email"
              name="email"
              value={email}
               onChange={(e) => {
                 setEmail(e.target.value);
               }}
            />  

            <label  className={classes.label}>PASSWORD</label>
            <input
               className={classes.input}
              name="password"
              value={password}
              label="Password"
              type="password"
              id="password"
              placeholder="***********"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            /> 
             <label  className={classes.label}>PHONE NUMBER</label>
            <input
             className={classes.input}
              id="phonenumber"
              placeholder="1234567890"
              label="Phone Number"
              name="phonenumber"
              value={phonenumber}
               onChange={(e) => {
                setPhonenumber(e.target.value);
               }}
            />  
        
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Submit}
            >
              Sign Up
            </Button>
            <Grid container>
              
              <Grid item>
               <Link to='/login' style={{textAlign:'center',paddingLeft:'70px',textDecorationLine:"none",fontWeight:"800"}}>Already have an account? <span className={classes.spam} >Sign In</span></Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
   
  );
};
export default SignUp;
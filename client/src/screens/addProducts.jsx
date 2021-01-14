import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {useHistory} from "react-router-dom"
import Grid from '@material-ui/core/Grid';


import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100vw",
    height:"100vh",
  },
  forms:{
    display:"block"
  },
  input:{
    width:"25vw",
    fontSize:'1.2rem',
    padding:"5px 0",
    margin:"10px 0",
    textAlign:'center',
    display:'block',
    
  },
  label:{
    fontSize:"1.2rem",
    textAlign:'center',
  },
  submit: {
    padding:"5px 10vw",
    margin: theme.spacing(3, 0, 2), //spacing(top,rightleft,bottom)
    marginRight:"37vw",
    marginBottom:"20vh",
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

export default function Addproducts() {
  const classes = useStyles();
  const history = useHistory();
  const [title,setTitle] = useState('');
  const [imgsrc,setImgsrc] = useState(''); 
  const [subtitle,setSubtitle] = useState('');
  const [description,setDescription] = useState('');
const onclickbackhandler = ()=>{
history.push('/Gallery')
}
const onclickaddhandler = ()=>{
 axios.post("http://localhost:5000/createProduct",{
 title,
 subtitle,
 imgsrc,
 description,
})
.then((response) => {
  console.log(response.data)
})
.catch((error) => {
  return error.response;
});
}
  return (
  
        <Grid container  className={classes.root}>
            <Grid item container xs={12} style={{maxHeight:"64px"}} >
            <AppBar position="static" style={{backgroundColor:"#000000",}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Gallery</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>

      <Grid container justify="center" style={{minWidth:"100vw",backgroundColor:"#ffffff",height:"88vh",paddingLeft:"38vw",paddingTop:"5vh"}}>
               <Grid item container className={classes.forms} > 
                    <label  className={classes.label}>PRODUCT NAME</label>
                <input 
                  className={classes.input}
                 placeholder="Samsung S9 Plus"
                id="title"
                label="Title"
                name="title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                  }}
              />
            </Grid>

                    <Grid item container className={classes.forms}>
                    <label  className={classes.label}>IMAGE SOURCE</label>
              <input 
                className={classes.input}
               placeholder="IMAGE"
                id="imgsrc"
                label="Img Source"
                name="imgsrc"
                value={imgsrc}
                onChange={(e) => {
                    setImgsrc(e.target.value);
                  }}
              />
            </Grid>
                  
            <Grid item container className={classes.forms}>
            <label  className={classes.label}>PRICE</label>
              <input 
                className={classes.input}
               placeholder="₹ PRICE"
                id="subtitle"
                type="form"
                label="Price"
                name="subtitle"
                value={subtitle}
                onChange={(e) => {
                    setSubtitle(e.target.value);
                  }}
              />
            </Grid>
            <Grid item container className={classes.forms}>
            <label  className={classes.label}>DESCRIPTION</label>
              <input
                className={classes.input}
               placeholder="ABOUT"
                id="description"
                type="form"
                label="Description"
                name="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                  }}
              />
            </Grid>
            <Grid item>
            <Button onClick={onclickaddhandler} className={classes.submit}>Submit</Button>
            </Grid>
           
            </Grid>
            </Grid>


  );
}

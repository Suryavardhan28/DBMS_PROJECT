import { Button, Grid } from '@material-ui/core';
import React, { useState,useContext } from 'react'
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { UpdateContext } from '../UpdatePriceContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:"100vw",
        height:"100vh",
      },
    input:{
      width:"25vw",
      fontSize:'1.2rem',
      padding:"5px 0",
      margin:"10px 0",
      textAlign:'center',
      display:'block',
      
    },
    forms:{
        paddingTop:"50px",
        display:"block",
        maxHeight:"0vh",
      },
    label:{
      fontSize:"1.2rem",
      textAlign:'center',
    },
    submit: {
        padding:"5px 10vw",
        margin: theme.spacing(3, 0, 2), //spacing(top,rightleft,bottom)
        marginRight:"35vw",
        marginBottom:"41vh",
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
  

function UpdatePrice() {
    const classes = useStyles();
    const {updatestore} = useContext(UpdateContext);
    const history = useHistory();
    console.log(updatestore.id)
    const [price,setPrice] = useState('');
    const onclicksubmit = (id) =>{
        console.log(id)
     axios.put(`http://localhost:5000/update/${id}`,{
     subtitle:price})   
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        window.alert("Incorrect Details");
      });
    }
    const onclickbackhandler = () =>{
        history.push('/Gallery')
    }
    return (
        <Grid container  className={classes.root}> 
       <Grid item xs={12} style={{maxHeight:"60px"}} >
            <AppBar position="static" style={{backgroundColor:"#000000",}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Gallery</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>

            <Grid container justify="center" style={{minWidth:"100vw",backgroundColor:"#ffffff",height:"88vh",paddingLeft:"40vw"}}>
            <Grid item container className={classes.forms} > 
            <label className={classes.label}>NEW PRICE</label>
        <input
         className={classes.input}
        placeholder="₹XXXXX"
          id="price"
          label=" Enter New Price"
          name="price"
          value={price}
          onChange={(e) => {
              setPrice(e.target.value);
            }}
        />
      </Grid>
      
      <Grid item>
      <Button className={classes.submit} onClick={()=>onclicksubmit(updatestore.id)}>
          Submit
      </Button>
      </Grid>
      </Grid>
      
      </Grid>
    )
}


export default UpdatePrice

import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  inputs:{
    width:"25vw",
    fontSize:'1.2rem',
    padding:"5px 0",
    marginTop:"10px",
    textAlign:'center',
    display:'block',
 
  },
  labels:{
    fontSize:"1.2rem",
    textAlign:'center',
    
  },
  submit: {
    padding:"5px 10vw",
    marginTop:"10px",
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

function UpdateEmployee() {
  const classes= useStyles();
    const [name,setName] = useState('');
  const [email,setEmail] = useState(''); 
  const [phonenumber,setPhonenumber] = useState(''); 
  const [role,setRole] = useState('');
  const [emp_name,setEmp_name] = useState('');
  const history = useHistory();
  const onclickaddemployeeHandler =() =>{
      axios.post("http://localhost:5000/addemployee",{
        name,
        email,
        phonenumber,
        role
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
  const OnclickremoveemployeeHandler =() =>{
      axios.post("http://localhost:5000/remove",{
        name:emp_name,
      })
  .then((response) =>{
console.log(response.data)
  })
  .catch((error) =>{
      console.log(error)
  })
}
const onclickbackhandler = ()=>{
    history.push('/employees')
    }
    return (
        <Grid container>
             <Grid item xs={12} style={{marginBottom:"8px"}}>
            <AppBar position="static" style={{backgroundColor:"#000000"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/>GO BACK</Button>
        </Toolbar>
      </AppBar>
            </Grid>
            <Grid container xs={6}  style={{borderRight:"#000000 2px solid",display:"block",height:"87vh",paddingLeft:"13vw"}}>
             <h1 style={{marginLeft:"65px"}}>Add Employees</h1>
        <Grid item xs={6}  style={{fontSize:"25px",paddingBottom:"20px"}}>
        <label className={classes.labels}>EMPLOYEE X</label>
        <input
           className={classes.inputs}
            placeholder="EMPLOYEE NAME"
          id="name"
          label="Employee Name"
          name="emp_name"
          value={name}
          onChange={(e) => {
              setName(e.target.value);
            }}
        />
      </Grid>
       
        <Grid item xs={6}  style={{fontSize:"25px",paddingBottom:"20px"}}>
        <label className={classes.labels}>EMAIL</label>
        <input
           className={classes.inputs}
            placeholder="samsungemployee@gmail.com"
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => {
              setEmail(e.target.value);
            }}
        />
      </Grid>
        
        <Grid item xs={6}  style={{fontSize:"25px",paddingBottom:"20px"}}>
        <label className={classes.labels}>PHONE NUMBER</label>
        <input
           className={classes.inputs}
            placeholder="1234567890"
          id="phonenumber"
          label="Phonenumber"
          name="phonenumber"
          value={phonenumber}
          onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
        />
      </Grid>
        <Grid item xs={6}  style={{fontSize:"25px",paddingBottom:"20px"}}>
        <label className={classes.labels}>ROLE</label>
        <input
           className={classes.inputs}
            placeholder="ROLE"
          id="role"
          label="Role"
          name="role"
          value={role}
          onChange={(e) => {
              setRole(e.target.value);
            }}
        />
      </Grid>
      <Grid item xs={6}>
      <Button onClick={onclickaddemployeeHandler} className={classes.submit}>
          Submit
      </Button>
      </Grid>
     </Grid>
      <Grid container xs={6} style={{display:"block",paddingLeft:"13vw"}} >
          <h1 style={{marginLeft:"45px"}}>Delete Employees</h1>
     <Grid item xs={6}  style={{fontSize:"25px",paddingBottom:"20px"}}>
     <label className={classes.labels}>EMPLOYEE NAME</label>
        <input
           className={classes.inputs}
            placeholder="EMPLOYEE X"
          id="employee name"
          label="employee name"
          name="employee name"
          value={emp_name}
          onChange={(e) => {
            setEmp_name(e.target.value);
            }}
        />
      </Grid>
      <Grid> 
         <Button onClick={OnclickremoveemployeeHandler} className={classes.submit}>
          Submit
      </Button> 
      </Grid>
     
      </Grid>
      </Grid>
    )
}

export default UpdateEmployee

import { Grid  } from '@material-ui/core';
import React , {useContext, useEffect  } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useHistory} from "react-router-dom"
import axios from 'axios';
import { UserContext } from '../userContext';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  submit: {
    padding:"5px 10vw",
    marginTop:"20px",
    color:"#ffffff",
    marginLeft:"30vw",
    backgroundColor:"#000000",
    fontSize:"1.2rem",
    '&:hover':{
      backgroundColor:"#D6D4D4",
      color:"#000000",
      cursor:"pointer",
    }
  },
});





function AllOrders() {
  const classes = useStyles();
  const {userstore} =useContext(UserContext);
  const [data,setData] = React.useState([]);
   
const history =useHistory();
  const onclickbackhandler = ()=>{
    history.push('/')
    }
  useEffect(() => {
    axios.get("http://localhost:5000/allOrders")
    .then(res=>{
      console.log(res.data.data)
      setData(res.data.data)
    }) 
    .catch(err=>{
      console.log(err)
    })  
 },[])


  
  return (
    <Grid container style={{fontFamily:"sans-serif"}}>
      <Grid item xs={12}>
            <AppBar position="static"  style={{backgroundColor:"#000000"}}>
        <Toolbar>
        <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Home</h5></Button>
        </Toolbar>
      </AppBar>
            </Grid>
      <Grid item container style={{marginTop:"20px"}}>
        <TableContainer component={Paper} style={{padding:"0 20px"}}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead style={{background:"#000000"}}>
              <TableRow >
                <TableCell  style={{color:"#ffffff",paddingLeft:"7vw"}}>ORDER ID</TableCell>
                <TableCell  style={{color:"#ffffff",paddingLeft:"7vw"}}>USERNAME</TableCell>
                <TableCell  style={{color:"#ffffff",paddingLeft:"7vw"}}>PRODUCTS</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
            <StyledTableRow>
              <StyledTableCell style={{paddingLeft:"7vw"}} >{row.orderid}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:"7vw"}} align="left">
               {row.name}</StyledTableCell>
              <StyledTableCell style={{paddingLeft:"7vw"}} align="left">
              {row.producttitle}</StyledTableCell>
           
 </StyledTableRow>
            ))}   
            </TableBody>
            </Table>
        </TableContainer>
      </Grid>
     


   
    </Grid>
  )
}

export default AllOrders
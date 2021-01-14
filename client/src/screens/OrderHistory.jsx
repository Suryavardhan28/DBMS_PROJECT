import React,{useState,useEffect,useContext} from 'react';
import { UserContext } from '../userContext';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import axios from 'axios';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
 
    typographyStyles: {
      position: 'fixed',
      left: '43.5vw',
    },
   
});

export default function OrderHistory() {
  const classes = useStyles();
  const history = useHistory();

  const { userstore } = useContext(UserContext);
  const [orders,setorders]=useState([])
  console.log(userstore.id);
  const onclickbackhandler = (e) =>{
    e.preventDefault();
      history.push('/Cart');
  }
  
  useEffect(()=>{
    axios
    .post('http://localhost:5000/orders',{
      userid:userstore.id
    })
    .then(res=>{
    setorders(res.data.data)
    }) 
  },[]);
  console.log(orders)
    return (  
      <Grid>
       <Grid item >
    <AppBar position="static" style ={{backgroundColor:"#000000"}}>
      <Toolbar>
          <Button  style={{color:'white'}} onClick={onclickbackhandler} ><ArrowBackOutlinedIcon  style={{color:'white', fontSize:'28px'}}/><h5>Back to Cart</h5></Button>

        <Typography className={classes.typographyStyles}>
            <h2>ORDER HISTORY</h2>
        </Typography>
        
      </Toolbar>
    </AppBar>
  </Grid>
              
        {
        orders.map((order) => {
          return (
            <Grid style={{padding:"30px"}} container item  xs={12} sm={12} direction="column" justify="center" alignItems='stretch' key={order.orderid}  >
              <Card>
                <Typography style={{padding:"20px",fontSize:'30px '}}>
          {'Orderid : '}{order.orderid}
                  </Typography>
                {order.producttitle.map(product => {
                  return(
                    <CardContent style={{padding:"15px",fontWeight:"700"}}>
                  {product}
                </CardContent>
                  )
                })}
              </Card>
            </Grid>
          );
        })}
      </Grid>
  ); 
}



































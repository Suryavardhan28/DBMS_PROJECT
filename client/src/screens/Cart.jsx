import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { CardContent, Grid} from '@material-ui/core';
import CartItemCard from '../components/CartItemCard';
import Card from '@material-ui/core/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '@material-ui/core/Button';
import { CartContext } from '../CartContext';
import {UserContext} from '../userContext'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles(() => ({
  head: {
    color: 'black',
    fontSize: '48px',

   
  },
  cart: {
    width: '100%',
    paddingBottom: '10px',
  },
  subtotal: {
   
    
    margin:"20px 0",
    fontWeight:"999",
    
  
  },
  root: {
    display: 'grid',
    height: '100vh',
  },
  footer: {
    direction: 'row',
    justify: 'center',
    alignContent: 'flex-end',
  },
  submit: {

   
   
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

function Cart() {
  const [CartItems, setItem] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/getProducts').then((res) => {
      console.log('Inside use effect', res.data);
      setItem(res.data.data);
    });
  }, []);
  const classes = useStyles();
  const { cartstore }= useContext(CartContext);
  const history = useHistory()
  const { userstore }= useContext(UserContext);
  const storeid = cartstore.map(({ id }) => id);
  console.log(storeid)
  const totalPrice = cartstore.reduce((acc , curr) => acc + curr.subtitle , 0);
const onclickCheckouthandler =() =>{
  history.push('/Order')
}
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item xs={12} conatiner justify="center" style={{margin:"6vh 80vh"}}>
            <h1 className={classes.head}>Shopping Cart</h1>
          </Grid>
      <Grid item container>
        <Grid item xs={1} />
       
        <Grid
          item
          xs={10}
          
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
         
          <Grid container spacing={4}>
            {CartItems.filter((item) => storeid.includes(item.id)).map(
              (item) => {
                return (
                  <Grid item xs={12} sm={6} key={item.id}>
                    <CartItemCard 
                      title={item.title}
                      subtitle={item.subtitle}
                      id={item.id}
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
         
        </Grid>
      
        <Grid item xs={1} />
        <Grid container style={{margin:"0 10vw"}}>
        <Grid item container justify="flex-end" className={classes.subtotal}>
            <Card justifyContent="flex-end"  style={{backgroundColor:"#BDC3C7"}}>
              <CardContent >
            <li >SubTotal = {'₹'} {totalPrice}</li>
              </CardContent>
            </Card>
          </Grid>
       
          <Grid
            item
            container
            justify="flex-end"
            style={{ marginBottom:"20px" }}
          >
            <Button className={classes.submit} variant="contained" color="primary" size="medium" disabled={userstore.user==='' || cartstore.length === 0 } onClick={onclickCheckouthandler}>
              Checkout
            </Button>
          </Grid>
          </Grid>
      </Grid>
      <Grid item container className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}
export default Cart;











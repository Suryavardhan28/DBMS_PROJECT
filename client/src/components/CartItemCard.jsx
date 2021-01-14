import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { CartContext } from '../CartContext';

const useStyles = makeStyles({
  root: {
    minWidth: '98%',
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
});

function CartItemCard(props) {
  const classes = useStyles();
  const { dispatch } = useContext(CartContext);

  const removeItemHandler = (id) => {
    dispatch({ type: 'removeFromCart', payload: id });
  };

  return (
    <Card className={classes.root}>
      
      <CardContent direction="row">
        <Grid container direction="row" justify="space-between" style ={{fontWeight:"600"}}>
          <li>{props.title}</li>
  <li >{'₹'} {props.subtitle}</li>
  
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.submit}
          onClick={() => removeItemHandler(props.id)}
        >
          Remove 
        </Button>
      </CardActions>
    </Card>
  );
}
export default CartItemCard;

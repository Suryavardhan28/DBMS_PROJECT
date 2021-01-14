import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../CartContext';
import { UserContext } from '../userContext';


import { useHistory } from 'react-router-dom';
import { UpdateContext } from '../UpdatePriceContext';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    maxHeight: '600px',
    minWidth: 20,
    textAlign:"center",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn:{
    marginLeft:'25px',
    padding:"10px 10px",
   
    '&:hover':{
      backgroundColor:"#000000",
      color:"#ffffff",
      cursor:"pointer",
    }
  }
});

const ProductsCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { dispatch } = useContext(CartContext);
  const { dispatch2 } = useContext(UpdateContext);
  const {userstore} = useContext(UserContext);
  const { id, title, subtitle, description, imgSrc } = props;

  const Onclickupdatehandler = (id) =>{ 
    
    dispatch2({type:'addtostore', payload:{id}});
    history.push('/updateprice')
   
  }
  const Onclickdeletehandler = (id) =>{ 
    
    
    axios.delete(`http://localhost:5000/remove/${id}`)
    history.push('/')
    
   
  }
  return (
    <Card className={classes.root}>
      <CardHeader title={title} style={{fontFamily:"Maven Pro"}}/>
  <Typography style={{paddingBottom:'2vh',fontWeight:"600"}}>{'₹'} {subtitle} {'/-'}</Typography>
      <CardMedia style={{ height: '34vh' }} image={imgSrc} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        ></Typography>
        <Typography variant="h8" component="h9">
          <li>{description}</li>
        </Typography>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions>
      {
    (userstore.user!=="admin") &&   <Button size="small" className={classes.btn} onClick={() => dispatch({
      type: 'addToCart',
      payload: {
        id: id,
        subtitle:subtitle,
        title:title   
      }
    })}>
      <ShoppingCartIcon />
      Add to Cart 
    </Button>
  }
       
        {
    (userstore.user==="admin") &&  <Button className={classes.btn} onClick={()=>Onclickupdatehandler(id)}>update</Button>
  }
        {
    (userstore.user==="admin") &&  <Button className={classes.btn} onClick={()=>Onclickdeletehandler(id)}>delete</Button>
  }
      </CardActions>
    </Card>
  );
};
export default ProductsCard;
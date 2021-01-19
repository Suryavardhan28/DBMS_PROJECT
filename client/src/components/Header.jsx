import React,{useContext} from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import {} from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { UserContext } from '../userContext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../images/logo.jpg';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  logo: {
    backgroundImage: `url(${logo})`,
    minHeight: '5vh',
    minWidth: '9vw',
    backgroundPosition: 'center center',
    backgroundSize: '10vw',
  },
  button:{
    color:'#ffffff',
    padding:'5px',
    marginLeft:"5px",
    '&:hover':{
      backgroundColor:"#ffffff",
      color:"#000000",
      borderRadius:"8px",
    }

  },
}));
const Header = () => {
  
  const { userstore } = useContext(UserContext);

  const { dispatch } = useContext(UserContext);

  const classes = useStyles();
  const history = useHistory();

  const onclick = () => {
    history.push('/')
  }
  const onclickloginhandler = () => {
    history.push('/login')
  }
  const onclickcarthandler = () => {
    history.push('/cart')
  }
  const onclickgalleryhandler = () => {
    history.push('/gallery')
  }
  const onclicklogouthandler = ()=>{
  dispatch({type :'logout',payload:{name:userstore.name}})
  window.alert("Logged out successfully")
    history.push('/')
  }
  const Onclicknamehandler = (e) =>{
    e.preventDefault();
    if(userstore.user !=="admin"){
    history.push('/OrderHistory')
    }
    if(userstore.user ==="admin"){
    history.push('/allOrders')
    }
  }
const OnclickAddhandler = (e) =>{
  e.preventDefault();
history.push("/addproducts")
}
 

  return (
    <AppBar position="static" style={{backgroundColor:"#000000"}}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          <IconButton onClick={onclick} ><div className={classes.logo}></div></IconButton>
        </Typography>
  {
    (userstore.user==="admin") &&  <Button onClick={OnclickAddhandler} className={classes.button}>Add products</Button>
  }
 
        <Button onClick={onclickgalleryhandler} style={{fontWeight:'450'}} className={classes.button}>Gallery</Button>
        <Button onClick={Onclicknamehandler} disabled={!userstore.user } className={classes.button}>{userstore.user}</Button>
        <IconButton onClick={onclickloginhandler} className={classes.button} ><PersonIcon/></IconButton>
        
        {
    (userstore.user!=="admin") && <IconButton onClick={onclickcarthandler} className={classes.button}><ShoppingCartIcon /></IconButton>
  }
        <IconButton onClick={onclicklogouthandler} className={classes.button}><ExitToAppIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

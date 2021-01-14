import React , {useContext} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../userContext';

const useStyles = makeStyles(() => ({
  text: {
    padding: '7px',
    backgroundColor: '#000000',
    listStyle: 'none',
    color: '#ffffff',
    

  },
}));
const Footer = () => {
  const {userstore} =useContext(UserContext);
  const classes = useStyles();
  const history =useHistory();

  const onclickcontactushandler = () => {
    history.push('/Contact')
  }
  const onclickemployeehandler = () => {
    history.push('/employees')
  }
  const onclicktriggerhandler = () => {
    history.push('/triggertable')
  }
  return (
    <Grid
      container
      className={classes.text}
      direction="row"
      justify="space-evenly"
 
    >
      
     
      <Button style={{color:'#ffffff' ,fontSize:"1.1rem"}} onClick={onclickemployeehandler}>Employee</Button>
      <Button style={{color:'#ffffff', fontSize:"1.1rem"}} onClick={onclickcontactushandler}>Contact Us</Button>
      {
  (userstore.user==="admin") &&  <Button style={{color:'#ffffff' ,fontSize:"1.1rem"}}  onClick={onclicktriggerhandler}>Trigge Table</Button>
}
     
        
      
    </Grid>
  );
};
export default Footer;

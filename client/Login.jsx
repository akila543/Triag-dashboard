import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Tabs, Tab} from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {HashRouter, Route, Link} from 'react-router-dom';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core/Dialog';

const styles={
    appbar:{
        backgroundColor: "#1b1d21",
        marginTop: "0px",
        height: "80px"
   }
}
class Login extends React.Component {
constructor(props){
    super(props);

}



render() {

      return (
     <div>
         <Toolbar>
            
            <Typography variant="title" color="inherit" style={{textAlign:'center'}}>
               Welcome to Triag Dashboard
            </Typography>
            <a href = '/auth/google'>
              <Button  name="button" style={{marginLeft:"100px",marginBottom:'-10px',color:"black",backgroundColor:"#67696d"}}>
            Login via Google
           </Button>
            </a>
            
           
          
        </Toolbar>
        

     </div>

      );
   }
}
export default Login;

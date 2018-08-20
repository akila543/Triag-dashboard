import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Radio from 'material-ui/Radio';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {HashRouter, Route, Link} from 'react-router-dom';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import request from 'superagent';

const styles={
    appbar:{
        backgroundColor: "#1b1d21",
        marginTop: "0px",
        height: "80px",
        textAlign: "center"
   }
}
class expenseForm extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
        typeoflog:''

    }
   
    this.handleChangetype=this.handleChangetype.bind(this);
    this.handleSave=this.handleSave.bind(this);
    
  }
   handleChangetype(event){
     this.setState({
       typeoflog:event.target.value
     })
   }
   

  handleSave(){
 request.post('/loadconf').query({typeoflog:this.state.typeoflog
  }).end((err, res) => {
           if(err)
           {
             console.log(err);
           }
           console.log(res)
         });
}

  render()
  {
    console.log(this.state.date)

    return(

      <div>
         <AppBar position="static" style={styles.appbar}>
          <Toolbar>
             <Typography variant="title" color="inherit" >
               Triag Dashboard
             </Typography>
          </Toolbar>
         </AppBar>
         <center>
      <Paper style={{marginTop:"5px",width:"80%",height:"200px", backgroundColor:'#d7d9dd'}}>
           
          <InputLabel style={{color:"black",marginLeft:"50px"}}> Choose the type of log</InputLabel>

                 <Select value={this.state.typeoflog}
                  onChange={this.handleChangetype}
                  style={{width:"55%",margiBottom:'20px'}}
                 >
                 <MenuItem value="SQL">SQL</MenuItem>
                 <MenuItem value="docker">docker</MenuItem>
                 <MenuItem value="sample">sample</MenuItem>
                </Select>
            <Button onClick={this.handleSave}
             name="button" style={{marginLeft:"700px",marginBottom:'-30px',color:"black",backgroundColor:"#67696d"}}>
              Submit
            </Button>
 </Paper>
</center>
</div>


    );
  }
}
export default expenseForm;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UploadPage from './UploadPage';
import history from '../history';
var apiBaseUrl = "http://localhost:4000/api/";
//uploadpage to strona, do której prowadzi udane logowanie, na razie pusta


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3cc26f',
    },
  }
});

class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider theme={theme}>
        <div>
         <TextField
           hintText="Podaj swój email"
           floatingLabelText="Email"
           onChange = {(event,newValue)=>this.setState({email:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Podaj hasło"
             floatingLabelText="Hasło"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           
           <RaisedButton label="Zaloguj" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    )
    this.state={
      email:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
    }
  }

  handleClick(event){
    var self = this;
    var payload = {
      "email": this.state.email,
	    "password": this.state.password
    }
    axios.post(apiBaseUrl + 'login', payload)
      .then(function (response) {
        if(response.status == 200){
          console.log("Login successfull");
  
          localStorage.setItem("userKey", response.data);
          history.push('/mode');
          // var uploadScreen=[];
          // uploadScreen.push(<UploadPage appContext={self.props.appContext}/>)
          // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
        }
        else if(response.status == 204){
          console.log("Username password does not match");
          alert("Nieprawidłowe hasło.")
        }
        else{
          console.log("Username does not exist");
          alert("Użytkownik nie istnieje.");
        }
      })
      .catch(function (error) {
        alert("Logowanie się nie powiodło.");
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <AppBar style={greenStyle}
             title="Logowanie"
           />
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
  background: '#3cc26f'
};

const greenStyle = {
  background: '#3cc26f'
}


export default Login;

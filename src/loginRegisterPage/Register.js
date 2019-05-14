import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3cc26f',
    },
  }
});

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    // console.log("values in register handler");
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.email.length>0 && this.state.password.length>0){
      var payload={
      "email":this.state.email,
      "password":this.state.password
      }
      axios.post(apiBaseUrl+'register', payload)
     .then(function (response) {
       console.log(response);
       if(response.status === 200){
         console.log("registration successfull");
         alert("Rejestracja przebiegła pomyślnie");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext}/>);
         var loginmessage = "Jeszcze niezarejestrowany? Załóż konto!";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Zarejestruj",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.status);
         alert("Przy rejestracji wystąpił błąd");
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Uzupełnij wszystkie pola.");
    }

  }
  render() {
    // console.log("props",this.props);
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
          <AppBar style={greenStyle}
             title="Rejestracja"
           />
           <TextField 
             hintText="Podaj swój email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Podaj hasło"
             floatingLabelText="Hasło"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             minLength="8"
             />
           <br/>
           <RaisedButton label="Zarejestruj" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

const greenStyle = {
  background: '#3cc26f'
}


export default Register;

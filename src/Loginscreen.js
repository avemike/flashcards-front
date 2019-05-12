import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { createMuiTheme } from '@material-ui/core/styles';
import Login from './Login';
import Register from './Register';

const style = {
  margin: 15,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3cc26f',
    },
  },
});

class Loginscreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];
    loginButtons.push(
      <div>
      <MuiThemeProvider theme={theme}>
        <div>
           <RaisedButton label={"Zarejestruj się"} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
      </div>
    )
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      studentbuttonLabel:'Zarejestruj się',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
    var loginmessage = "Jeszcze niezarejestrowany? Załóż konto!";
    this.setState({
      loginscreen:loginscreen,
      loginmessage:loginmessage
    })
  }
  handleClick(event){
    console.log("event");
    var loginmessage;
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<Register parentContext={this} appContext={this.props.appContext}/>);
      loginmessage = "Masz już konto? Przejdź do logowania";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
        <MuiThemeProvider theme={theme}>
          <div>
             <RaisedButton label={"Logowanie"} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      this.setState({
        loginscreen:loginscreen,
        loginmessage:loginmessage,
        loginButtons:loginButtons,
        isLogin:false
      })
    }
    else {
      let loginscreen=[],loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider theme={theme}>
          <div>
             <RaisedButton label={"Zarejestruj się"} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
      loginmessage = "Jeszcze niezarejestrowany? Załóż konto!";
      this.setState({
        loginscreen: loginscreen,
        loginmessage: loginmessage,
        loginButtons: loginButtons,
        isLogin: true
      })
    }
  }
  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;

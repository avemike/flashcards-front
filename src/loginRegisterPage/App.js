import React, { Component } from 'react';
import './App.css';
import './index.css';
import LoginScreen from './Loginscreen';
import history from '../history';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }
  componentWillMount(){
    // is logged in?
    axios.get('http://localhost:4000/api/register/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(()=> {
            // User is logged in
            history.push('/mode')
        })
    
    
    const loginPage = [];
    loginPage.push(<LoginScreen appContext={this} />);
    this.setState({
      loginPage: loginPage
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;

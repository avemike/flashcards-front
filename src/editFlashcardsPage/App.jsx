import React, { Component } from 'react';
import './App.css';
import './style.css'
import Header from './Header/Header';
import Content from './Content/Content'
import axios from 'axios';
import history from '../history';

export default class App extends Component {
    constructor() {
        super();
        this.state = { authorized: false }
        axios.get('http://localhost:4000/api/register/me', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem("userKey")
            }
        })
        .then(res => {
            // User is logged in
            this.setState({authorized: true})
            
        })
        .catch(err => {
            // Redirect to home
            history.push('/loginRegister')
        })
    }
    render() {
        if(this.state.authorized) return (
            <div className='screen'>
                <div className='container'>
                    <Header />
                    <Content />
                </div>
            </div>
        );
        else return <div></div>    
    }
}





import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './style.css'
import TopBar from "../topBar/TopBar"
import HompageButton from "../topBar/HompageButton"
import LogoutButton from "../topBar/LogoutButton"
import ShowUser from "../topBar/ShowUser"
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
                <TopBar>
                    <Link to="/mode" >
                        <HompageButton />
                    </Link>
                    
                    <ShowUser />
                    <LogoutButton />
                </TopBar>
                <div className='container'>
                  
                    <Content />
                </div>
            </div>
        );
        else return <div></div>    
    }
}





import React from 'react';
import Choice from './Choice'
import axios from 'axios';
import history from '../history';

export default class App extends React.Component {
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
        return this.state.authorized ? <Choice /> : <div></div>
    }
}
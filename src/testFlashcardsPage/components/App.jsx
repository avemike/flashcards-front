import React from 'react';
import FlashcardsChoosement from './FlashcardsChoosement';
import axios from 'axios';
import HompageButton from "../../topBar/HompageButton"
import LogoutButton from "../../topBar/LogoutButton"
import ShowUser from "../../topBar/ShowUser"
import history from '../../history';
import TopBar from '../../topBar/TopBar';

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
        return(
            <div>
                <TopBar>
                    <HompageButton />
                    <ShowUser />
                    <LogoutButton />
                </TopBar>
                this.state.authorized ? <div> <FlashcardsChoosement /></div>:<div></div>
            </div>
        ) 
    }
}
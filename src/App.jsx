import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Content from './Content/Content'

export default class App extends Component {

    render() {
        return (
            <div class='container'>
                <Header />
                <Content />
            </div>
        );
    }
}





import React, { Component } from 'react';
import './App.css';
import './style.css'
import Header from './Header/Header';
import Content from './Content/Content'

export default class App extends Component {

    render() {
        return (
            <div className='screen'>
                <div className='container'>
                    <Header />
                    <Content />
                </div>
            </div>
        );
    }
}





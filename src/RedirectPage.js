import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

class RedirectPage extends Component {
  render() {
    return (
      <div>
         <h1>Tymczasowa strona przekierowań</h1>
        <Link to="/loginRegister">Login</Link>
      </div>
    );
  }
}

export default RedirectPage;

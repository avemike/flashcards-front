import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RedirectPage extends Component {
  render() {
    return (
      <div>
        <h1>Tymczasowa strona przekierowań</h1>
        <Link to="/loginRegister">Login</Link>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

export default RedirectPage;

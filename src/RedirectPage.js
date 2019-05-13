import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RedirectPage extends Component {
  render() {
    return (
      <div>
        <h1>Tymczasowa strona przekierowań</h1>
        <ul>
          <li>
            <Link to="/loginRegister">Login</Link>
          </li>
          <li>
            <Link to="/mode">Mode</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>  
        </ul>
      </div>
    );
  }
}

export default RedirectPage;

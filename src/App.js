import React from "react";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import LoginRegisterPage from './loginRegisterPage/App';
import RedirectPage from './RedirectPage';
import ModePage from './chooseModePage/App';
import LandingPage from './landingPage/App';

const App = () => (
    <Router>
        <div>
            <Route path="/" exact component={RedirectPage} />
            <Route path="/home" component={LandingPage} />
            <Route path="/loginRegister" component={LoginRegisterPage} />
            <Route path="/mode" component={ModePage} />
        </div>
    </Router>
);

export default App;
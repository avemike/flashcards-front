import React from "react";
import {
    Router,
    Route
} from 'react-router-dom';
import LoginRegisterPage from './loginRegisterPage/App';
import ModePage from './chooseModePage/App';
import LandingPage from './landingPage/App';
import EditFlashcardPage from './editFlashcardsPage/App';
import TestPage from './testFlashcardsPage/components/App'
import history from './history';

const App = () => (
    <Router history={history}>
        <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={LandingPage} />
            <Route path="/loginRegister" component={LoginRegisterPage} />
            <Route path="/editFlashcards" component={EditFlashcardPage} />
            <Route path="/mode" component={ModePage} />
            <Route path="/test" component={TestPage} />
        </div>
    </Router>
);

export default App;
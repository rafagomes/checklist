import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import MainTemplate from './components/templates/main';
import CreateChecklist from './components/pages/create-checklist';
import AdminTemplate from './components/templates/admin';
import {getGithubAuth} from './services/checklistService/checklistService';

function App(){
    return (
        <Router>
            <Switch>
                <MainTemplate path="/" exact component={CreateChecklist} />
                <AdminTemplate path="/admin" component={CreateChecklist} />
            </Switch>
        </Router>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
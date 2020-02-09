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
import CreateFabricant from './components/pages/create-fabricant';

function App(){
    return (
        <Router>
            <Switch>
                <MainTemplate path="/" exact component={CreateChecklist} />
                <AdminTemplate path="/admin" exact component={CreateChecklist} />
                <AdminTemplate path="/admin/fabricants/new" exact component={CreateFabricant} />
            </Switch>
        </Router>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
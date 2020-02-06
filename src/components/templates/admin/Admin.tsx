import React, { Fragment} from 'react';
import {Route, RouteProps} from 'react-router-dom';

function AdminTemplate(props:RouteProps) {
    return (
        <Fragment>
            <h1>Admin Template</h1>
            <Route {...props} />
        </Fragment>
    )
} 

export default AdminTemplate;
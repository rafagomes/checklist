import React, { Fragment} from 'react';
import {Route, RouteProps} from 'react-router-dom';

function MainTemplate(props:RouteProps) {
    return (
        <Fragment>
            <h1>Main Template</h1>
            <Route {...props} />
        </Fragment>
    )
} 

export default MainTemplate;
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const component = <Router history={createBrowserHistory()}>
    {routes}
</Router>;

ReactDOM.render(component,  document.getElementById('content'));

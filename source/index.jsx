import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import PlayerPage from './vr-player/Player';
import PlayerDemo from './vr-player/PlayerDemo';
import NotFound from './404';

const component = <Router>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="react-vr-player" component={PlayerPage}/>
        <Route path="react-vr-player-demo" component={PlayerDemo}/>
        <Route path="*" component={NotFound}/>
    </Route>
</Router>;

ReactDOM.render(component, document.getElementById('content'));

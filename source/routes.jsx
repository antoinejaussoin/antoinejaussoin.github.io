import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import PlayerPage from './vr-player/Player';
import PlayerDemo from './vr-player/PlayerDemo';
import NotFound from './404';

export default <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="react-vr-player" component={PlayerPage}/>
        <Route path="react-vr-player-demo" component={PlayerDemo}/>
        <Route path="*" component={NotFound}/>
    </Route>;

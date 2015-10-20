require('./server.babel');

var React = require('react');
var ReactDOM = require('react-dom/server');
var router = require('react-router');
var routes = require('../source/routes.jsx');
var fs = require('fs');
var path = require('path');

var match = router.match;
var RoutingContext = React.createFactory(router.RoutingContext);

console.log('Building index.html');

var html = fs.readFileSync(path.resolve(__dirname, '../index_dev.html'), 'utf8');

match( { routes, location: '/' }, (error, redirectLocation, renderProps) => {
    var renderedHtml = ReactDOM.renderToString(RoutingContext(renderProps));
    var modifiedHtml = html.replace('Loading...', renderedHtml);
    fs.writeFileSync(path.resolve(__dirname, '../index.html'), modifiedHtml);

    console.log('Building index.html done.');
});

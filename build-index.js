require('./server.babel');

var React = require('react');
var reactDOM = require('react-dom/server');
var router = require('react-router');
var match = router.match;
var RoutingContext = React.createFactory(router.RoutingContext);
var routes = require('./source/routes.jsx');
var fs = require('fs');

var html = fs.readFileSync('index_dev.html', 'utf8');

console.log(html);

match( { routes, location: '/' }, (error, redirectLocation, renderProps) => {
    var str = reactDOM.renderToString(RoutingContext(renderProps));
    var modifiedHtml = html.replace('Loading...', str);
    fs.writeFileSync('index.html', modifiedHtml);
});

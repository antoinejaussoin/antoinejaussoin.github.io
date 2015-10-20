//  enable runtime transpilation to use ES6/7 in node

var fs = require('fs');
var path = require('path');

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var babelrc = fs.readFileSync(path.resolve(__dirname+'/.babelrc'));
var config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

// Need to stub the window and document objects, some code somewhere calls them directly
global.window = {
    navigator: {
        userAgent: 'NODE'
    }
};

global.document = {
    createElement: function () {
        return {
            type: '',
            appendChild: function(){}
        };
    },
    getElementsByTagName: function(){
        return [{
            appendChild: function(){}
        }];
    },
    createTextNode: function(){
        return {
            appendChild: function(){}
        };
    }
};

require('babel/register')(config);

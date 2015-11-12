/* eslint-env node */

// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc.
require('babel/polyfill');

var context = require.context('./src', true, /-test\.js$/);
context.keys().forEach(context);

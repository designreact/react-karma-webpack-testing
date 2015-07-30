var index = require('./static/index.html');

var React = require('react');
var Root = require('./components/root');
var request = require('request');

var run = () => {
    React.render(<Root/>, document.getElementById('app'));
};

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}
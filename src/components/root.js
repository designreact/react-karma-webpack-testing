var birdman = require('../static/img/birdman.jpg');

var React = require('react');
var Service = require('../utils/service');

var Root = React.createClass({

  render: function () {
    var summed = Service.sum(100, 230);
    return (
      <div>
        <h1>Hello World!!! {summed}</h1>

        <p>
          Please input your name here:
          <input onChange={this.handleChange}
            value={this.state.name}
          />
        </p>

        <p>Hello, {this.state.name}</p>
      </div>
    );
  },

  getInitialState: function () {
    return {
      name: ''
    };
  },

  handleChange: function (e) {
    var newName = e.target.value();
    this.setState({
      name: newName
    });
  }

});

module.exports = Root;

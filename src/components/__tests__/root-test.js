var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var Root = require('../root');

describe('root', function () {

  var spy;

  before(() => {
    spy = sinon.spy();

    spy();
  });

  after(() => {
    spy.reset();
  });

  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument(<Root/>);

    expect(root).toExist();

    expect(spy.calledOnce).toBe(true);

  });
});

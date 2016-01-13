
const ReactDOM = require('react-dom');
const React = require('react');


const Test = React.createClass({
  render: function() {
    return <h1>Hello World</h1>;
  }
})


ReactDOM.render(<Test />, document.getElementById('game'))

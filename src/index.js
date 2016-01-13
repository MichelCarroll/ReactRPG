"use strict";

const ReactDOM = require('react-dom');
const React = require('react');


const Grid = React.createClass({
  getRow: function() {
    return Array.from(Array(this.props.width).keys()).map((u,i) => <div className="tile grass" key={i}></div>)
  },
  render: function() {
    return <div className="grid">{
      Array.from(Array(this.props.height)).map((u,i) => <div className="row" key={i}>{this.getRow()}</div>)
    }</div>;
  }
})


ReactDOM.render(<Grid height={10} width={10} />, document.getElementById('game'))

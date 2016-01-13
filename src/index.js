"use strict";

const ReactDOM = require('react-dom');
const React = require('react');

const Player = React.createClass({
  render: function() {
    return <div className="player"></div>;
  }
});

const Tile = React.createClass({
  render: function() {
    return <div className="tile">{
      React.Children.map(this.props.children, function (child) { return child; })
    }</div>;
  }
});

const Ground = React.createClass({
  render: function() {
    return <div className="grass"></div>;
  }
});

const Grid = React.createClass({
  getTileContents: function(x, y) {
    if(x == 5 && y == 5) {
      return [<Ground key="ground" />, <Player key="player" />];
    }
    return [<Ground key={"ground"} />];
  },
  getRow: function(y) {
    return Array.from(Array(this.props.width), (u,x) => <Tile key={x}>{this.getTileContents(x, y)}</Tile>)
  },
  render: function() {
    return <div className="grid">{
      Array.from(Array(this.props.height), (u,y) => <div className="row" key={y}>{this.getRow(y)}</div>)
    }</div>;
  }
})


ReactDOM.render(<Grid height={10} width={10} />, document.getElementById('game'))

"use strict";

const ReactDOM = require('react-dom');
const React = require('react');
const KeyEvents = require('keyevents');

const Player = React.createClass({
  render: function() {
    return <div className="player"></div>;
  }
});

const Tile = React.createClass({
  render: function() {
    return <div className="tile"><div className="tile-container">{
      React.Children.map(this.props.children, function (child) { return child; })
    }</div></div>;
  }
});

const Ground = React.createClass({
  render: function() {
    return <div className="grass"></div>;
  }
});

const Grid = React.createClass({
  mixins: [KeyEvents],
  getInitialState: function() {
    return {
      playerX: Math.floor(this.props.width/2),
      playerY: Math.floor(this.props.height/2)
    }
  },
  componentKeyEvents: function(keypressed) {
    let action = this.getKeyAction()[keypressed];
    action && action(keypressed);
  },
  getKeyAction: function() {
    return {
      up:    () => this.setState({playerY: this.state.playerY - 1}),
      down:  () => this.setState({playerY: this.state.playerY + 1}),
      left:  () => this.setState({playerX: this.state.playerX - 1}),
      right: () => this.setState({playerX: this.state.playerX + 1}),
    }
  },
  getTileContents: function(x, y) {
    if(x == this.state.playerX && y == this.state.playerY) {
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

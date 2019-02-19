import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getRandomInt(max:number):number {
  return Math.floor(Math.random() * Math.floor(max));
}


class App extends Component<any,any> {
    constructor(props:any){
	super(props);
	this.state = {sides: 6, roll: 1};
	this.roll = this.roll.bind(this);
	this.changeSides = this.changeSides.bind(this);
    }
    roll() {
	this.setState({roll:getRandomInt(this.state.sides)+1});
    }
    changeSides(e:any){
	this.setState({sides: parseInt(e.target.value)})
    }
  render() {
    return (
      <div className="App">
            <header className="App-header">
	    <div className="result">{this.state.roll}</div>
	    <button onClick={this.roll}>Roll</button>
	    <input type="number" onChange={this.changeSides} value={this.state.sides}></input>
        </header>
      </div>
    );
  }
}

export default App;

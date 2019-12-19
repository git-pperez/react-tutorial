import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {
    const isActivated = this.props.isActivaded ? 'On' : 'Off'
    const mappedArray = this.props.array.map(n => n*2)
    return <div>
      <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{isActivated}</p>
      <p>{mappedArray.join(', ')}</p>
      <p>{this.props.object.key}</p>
    </div>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props"/>
        <Text 
        array= {[1,2,3]}
        object = {{key:'First value', key2:'Second value'}}
        number={1} 
        isActivated
        text='Hi'/>
      </header>
    </div>
  );
}

export default App;

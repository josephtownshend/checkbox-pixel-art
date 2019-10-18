import React, { Component } from 'react';
import Checkbox from './components/Checkbox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="Row">
        <div class="Box"><Checkbox /></div>
        <div class="Box"><Checkbox /></div>
        <div class="Box"><Checkbox /></div>
        <div class="Box"><Checkbox /></div>
      </div>
    );
  }
}

export default App;

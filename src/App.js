import React, { Component } from 'react';
import Checkbox from './components/Checkbox';
import './App.css';

class App extends Component {

  state = {
    checked: null
  }

  resetCheckbox = () => {
    console.log(this.state);
    this.setState({
      checked: false
    });
      console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Checkbox />
        <button onClick={this.resetCheckbox}>button</button>
      </div>


    </React.Fragment>
    );
  }
}

export default App;

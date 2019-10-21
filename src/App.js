import React, { Component } from 'react';
import Checkbox from './components/Checkbox';
import './App.css';

class App extends Component {

  // state = {
  //   checked: null
  // }
  //
  // resetCheckbox = () => {
  //   console.log(this.state);
  //   this.setState({
  //     checked: this.state.checked = false
  //   });
  //     console.log(this.state);
  // };

  render() {
    return (
      <div className="App">
        <Checkbox />
      </div>
    );
  }
}

export default App;

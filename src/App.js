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
      checked: this.state.checked = false
    });
      console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <div className="Grid">
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div className="Row">
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
            <div className="Box"><Checkbox /></div>
          </div>
          <div>
            <button onClick={this.resetCheckbox}>reset</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import '../App.css';

export default class Checkbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Grid">
          <div className="Row">
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
          </div>
          <div className="Row">
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
            <div className="Box"><input type="checkbox"/></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

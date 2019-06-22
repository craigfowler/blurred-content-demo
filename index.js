import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div className="content">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
        <svg className="blur-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <filter id="blur-filter">
              <feGaussianBlur stdDeviation="3"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

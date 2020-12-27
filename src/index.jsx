import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//  return <div>Hello, {props.name}</div>;
// }

class Hello extends Component {
  constructor(props) {
    super(props);
    // state is what will change during the lifetime of the component
    this.state = {
      clicked: false
    };
  }

  render() {
    // the goal of render is to build and return HTMl
    return (
      <div className={this.state.clicked ? 'clicked' : null}>
        Hello {this.props.name}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

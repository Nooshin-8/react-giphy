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

  handleClick() {
    // in this method I want to change the state
    //console.log('clicked');
    this.setState({
      clicked: !this.state.clicked
      counter: this.state.counter + 1
    });
  }

  render() {
    // the goal of render is to build and return HTMl
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

// this is how we would have write it in JS without react
// const div = document.querySelector('div');
// div.addEventListener('click', (event) => {
//  if (event.currentTarget.classList.contains('clicked')) {
//    (event.currentTarget.classList.remove('clicked');
//   } else {
//    (event.currentTarget.classList.add('clicked');
//   }
//  });









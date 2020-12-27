import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = (props) => {
  return <div>Hello, {props.name}</div>;
}

class Hello extends Component {
  constructor() {

  }

  render() {

  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

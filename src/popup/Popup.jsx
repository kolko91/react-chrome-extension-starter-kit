import React from 'react';

import Hello from './components/Hello';
import './style.scss';

export default class Popup extends React.Component {
  static propTypes = {}
  static defaultProps = {}
  state = { extends: false }
  render() {
    return (
      <Hello />
    );
  }
}

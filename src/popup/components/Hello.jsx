import React from 'react';

export default class Hello extends React.Component {
  static propTypes = {}
  static defaultProps = {}
  state = { extends: false }
  render() {
    return (
      <div>
        Hello RCE Popup
      </div>
    );
  }
}

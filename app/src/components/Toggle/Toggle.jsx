import React from 'react';

class Toggle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      on: true
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { on } = this.state;
  
    this.setState({
      on: !on
    });
  }

  render() {
    const { on } = this.state;
  
    return (
      <button
        onClick={this.toggle} >
        {on ? 'On' : 'Off'}
      </button>
    );
  }
}

export default Toggle;

import React from 'react';

class AddButton extends React.Component {
    handleClick() {
      alert(this.props.bill);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={() => this.handleClick()}>
          Click me
      <text>{this.props.bill}</text>
        </button>
      );
    }
  }

  export default AddButton;
import React from 'react';
import Button from './Button.js'

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bill: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Bill:
            <input
              name="bill"
              type="currency"
              checked={this.state.bill}
              onChange={this.handleInputChange} />
          </label>
          <Button {...this.state} />
        </form>
      );
    }
  }

  export default Input;
import React from 'react';

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bill: "",
        income: ""
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
          <br />
          <label>
            Income:
            <input
              name="income"
              type="currency"
              value={this.state.income}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default Input;
import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    console.log(this.state.name);
    return (
      <React.Fragment>
        <form>
          <h4>Project title</h4>
          <input
          name=""
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Project Name"
          />
          <h4>Hourly rate</h4>
          <span>$</span><input
          name=""
          value={this.state.name}
          onChange={this.handleInputChange}
          type="number"
          />
        </form>
      </React.Fragment>
    )
  }
}

export default Form;

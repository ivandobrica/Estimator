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
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <h4>Project title</h4>
          <input
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Project Name"
          />
          <h4>Hourly rate</h4>
          <span>$</span><input
          name="price"
          value={this.state.price}
          onChange={this.handleInputChange}
          type="number"
          />
        </form>
      </React.Fragment>
    )
  }
}

export default Form;

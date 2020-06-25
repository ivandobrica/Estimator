import React, {Component} from 'react'

import DeleteListItem from '../DeleteListItem'

class tableList extends Component {
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

  deleteItem() {
    console.log("deleted")
  }

  render() {
    return (
      <React.Fragment>
        {this.props.name}
        <input
        name="title"
        type="text"
        placeholder="Task name"
        />
        <input
        name="price"
        value={this.state.price}
        onChange={this.handleInputChange}
        type="number"
        />
        <label>&times;</label>
        <span>$</span><input
        name="price"
        value={this.state.price}
        onChange={this.handleInputChange}
        type="number"
        />
      <label>=</label>
      <DeleteListItem clicked={this.deleteItem}/>
      </React.Fragment>
    )
  }
}

export default tableList;

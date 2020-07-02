import React, {Component} from 'react'

import DeleteListItem from '../DeleteListItem'

class TableListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      hours: '',
      rate: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  onDeleteItem(id) {
    this.props.deleteListItem(this.props.id)
  }

  render() {
    const total = this.state.hours * this.state.rate;
    return (
      <React.Fragment>
        <input
        name="title"
        type="text"
        placeholder="Task name"
        />
        <input
        name="hours"
        value={this.state.hours}
        onChange={this.handleInputChange}
        type="number"
        />
        <label>&times;</label>
        <span>$</span><input
        name="rate"
        value={this.state.rate}
        onChange={this.handleInputChange}
        type="number"
        />
      <label>=</label>
      <label>{total}</label>
      <DeleteListItem clicked={this.onDeleteItem}/>
      </React.Fragment>
    )
  }
}

export default TableListItem;

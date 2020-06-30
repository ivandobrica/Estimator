import React, {Component} from 'react'

import DeleteListItem from '../DeleteListItem'

class TableListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
      id: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount(){
    this.setState({
      id: this.props.id
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  deleteItem(id) {
    this.props.deleteListItem(id)
  }

  render() {

    return (
      <React.Fragment>
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

export default TableListItem;

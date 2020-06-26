import React, { Component } from 'react'

import TableListItem from '../TableListItem'
import Button from '../Button'

class TableList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      newItems: [],
      currentItem:{
        key:'',
      }
    }
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem() {
    const newItem = this.state.currentItem;

    const newItems=[...this.state.newItems, newItem];

    this.setState({
      newItems: newItems
    })
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.newItems.map((newItem, i) => (
            <li key={i}>
              <TableListItem
              name={this.state.newItems[i].name}
              />
            </li>
          ))}
        </ul>
        <Button clicked={this.addNewItem}/>
      </React.Fragment>
    )
  }
}

export default TableList;

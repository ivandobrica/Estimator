import React, { Component } from 'react'

import TableListItem from '../TableListItem'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid';

class TableList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      newItems: [],
      currentItem: {
        id: ''
      }
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

deleteItem(id){
  const newItems = this.state.newItems.filter(newItem => newItem.id !== id)

    this.setState({
    newItems: newItems
  })
}

  addNewItem() {
    const newItem = this.state.currentItem;

    const newItems=[...this.state.newItems, { id: uuidv4() }];
    this.setState({
      newItems: newItems
    })
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.newItems.map((newItem, i) => (
            <li key={newItem.id}>
              <TableListItem
              id={newItem.id}
              deleteListItem={(id) => this.deleteItem(id)}
              />
            </li>
          ))}
        </ul>
        <Button name="Add Task" clicked={this.addNewItem}/>
      </React.Fragment>
    )
  }
}

export default TableList;

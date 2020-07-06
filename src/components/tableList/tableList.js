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
        id: '',
        sve: ''
      }
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getData = this.getData.bind(this);
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

  getData(total) {
    this.setState({
      sve: total
    })
  }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.sve !== this.state.sve) {
        
      }
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
              racunaj={this.getData}
              />
            </li>
          ))}
        </ul>
        <Button name="Add Task" clicked={this.addNewItem}/>
        <h1>{this.state.sve}</h1>
      </React.Fragment>
    )
  }
}

export default TableList;

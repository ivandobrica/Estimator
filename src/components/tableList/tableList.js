import React, { Component } from 'react'

import TableListItem from '../TableListItem'
import Button from '../Button'
import { v4 as uuidv4 } from 'uuid';

class TableList extends Component {
  constructor(props) {
  super(props)
    this.state = {
      newItems: [],
      currentItem:{
        id:''
      }
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

/*
  deleteItem(index){
    const list = this.state.newItems;
    for( let i = 0; i < list.length; i++ ){
      console.log('index', index)
      console.log('list', list[i])
      if ( i === index ) {
        list.splice(index, 1)
      }
    }
      this.setState({
      newItems: list
    })
  }
  */

deleteItem(id){
  const newItems = this.state.newItems.filter(i => i.id !== id)
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
            <li key={i}>
              <TableListItem
              id={this.state.newItems[i].id}
              deleteListItem={(id) => this.deleteItem(id)}
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

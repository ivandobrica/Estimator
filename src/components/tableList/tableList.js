import React, { Component } from 'react'

import TableListItem from '../TableListItem'
import Button from '../Button'

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
  }


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


  addNewItem() {
    const newItem = this.state.currentItem;

    const newItems=[...this.state.newItems, newItem];

    this.setState({
      newItems: newItems
    })
  }

  render() {
    console.log(this.state.newItems)
    return (
      <React.Fragment>
        <ul>
          {this.state.newItems.map((newItem, i) => (
            <li key={i}>
              <TableListItem
              name={this.state.newItems[i].name}
              deleteListItem={this.deleteItem.bind(this, i)}
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

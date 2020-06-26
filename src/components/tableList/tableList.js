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

/* poslozi da uzima [i] ili da od buttona do ovdje vuce key

  deleteItem() {
    console.log("deleted")
    const filteredItems = this.state.newItems.filter(item => {
      return item.key !== key;
    })

    this.setState({
      newItems: filteredItems
    })
  }
*/

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
              deleteListItem={this.deleteItem.bind(this)}
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

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
      },
      ivan: 0
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.setState({
      newItems: [
        {
          id: 1
        }
      ]
    })
  }

  deleteItem(id, total){
    var finalTotal = this.state.ivan - total
    const newItems = this.state.newItems.filter(newItem => newItem.id !== id)
      this.setState({
      newItems: newItems,
      ivan: finalTotal
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
    this.setState(prevState => ({
      ivan: prevState.ivan + total
   }))
  }




  render() {
    return (
      <React.Fragment>
        <div className="listTitle">
          <div>
            <h4>Task name</h4>
          </div>
          <div className="listTitleSecond">
            <h4>Hours</h4>
            <h4>Rate</h4>
            <span><h4>Est. price</h4></span>
          </div>
        </div>
        <ul>
          {this.state.newItems.map((newItem, i) => (
            <li key={newItem.id}>
              <TableListItem
              id={newItem.id}
              deleteListItem={(id, total) => this.deleteItem(id, total)}
              racunaj={this.getData}
              />
            </li>
          ))}
        </ul>
        <div className="finalResult">
          <Button className="addBtn" name="Add Task" clicked={this.addNewItem} />
          <div className="rightSideResult">
            <h4>Total</h4>
            <h2>${this.state.ivan}</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TableList;

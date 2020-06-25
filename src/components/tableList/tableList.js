import React, {Component} from 'react'

import TableListItem from '../TableListItem'
import Button from '../Button'


class tableList extends Component {
  constructor(props) {
  super(props)

    this.state = {
      newItems: [{
        name:"Project Setup"
      },
      {
        name:"Slider (5 slider)"
      }]
    }
  }

  addNewItem() {

  };

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

export default tableList;

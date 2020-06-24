import React, {Component} from 'react'

import TableListItem from '../TableListItem'

class tableList extends Component {
  constructor(props) {
  super(props)

    this.state = {
      newItems: [{
        name:"nesto",
        id: 1
      },
      {
        name:"nestsfsfo",
        id: 2
      }]
    }
  }

  addEmptyItem(newItem) {
    this.setState(prevState => ({
      newItems: [...prevState.newItems, newItem]
    }));
  };

  onChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({ [key]: value });
}

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.newItems.map((newItem, i) => (
            <li key={i}>
              <TableListItem
              name={this.state.newItems[0].name}
              />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default tableList;

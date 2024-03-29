import React, {Component} from 'react'

import DeleteListItem from '../DeleteListItem'

class TableListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      hours: '',
      rate: '',
      total: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
  if (prevState.hours !== this.state.hours || prevState.rate !== this.state.rate) {
    const total = this.state.hours * this.state.rate
    this.setState({
      total: total
    })
    this.passTotal(total)
    }
  }

  passTotal(total){
    this.props.addTotal(total)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  onDeleteItem() {
    this.props.deleteListItem(this.props.id, this.state.total)
  }

  render() {
    return (
      <React.Fragment>
        <div className="inputLi">
          <input
          className="inputTitleItem"
          name="title"
          type="text"
          placeholder="Task name"
          />
          <div className="numberPart">
            <input
            className="inputNumberItem"
            name="hours"
            value={this.state.hours}
            onChange={this.handleInputChange}
            type="number"
            />
            <label>&times;</label>
            <div className="test">
              <i>$</i>
              <input
              className="inputNumberItem"
              name="rate"
              value={this.state.rate}
              onChange={this.handleInputChange}
              type="number"
              />
            </div>
            <label>=</label>
            <label className="result">${this.state.total}</label>
            <DeleteListItem className="" clicked={this.onDeleteItem} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TableListItem;

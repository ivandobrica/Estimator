import React, {Component} from 'react'

import Button from '../Button'
import TableList from '../TableList'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      price: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  makePdf(){
      window.print()
  }

  render() {
    return (
      <React.Fragment>
        <form className="form">
          <div className="upperPart">
            <div className="firstPart">
              <h4>Project title</h4>
              <input
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Give me a name.."
              />
            </div>
            <div className="secondPart">
              <h4>Hourly rate</h4>
              <div className="priceInput">
                <i>$</i>
                <input
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
                type="number"
                />
              </div>
            </div>
          </div>
          <TableList />
          <Button
            className="pdfBtn" 
            name="Export to PDF"
            description="Powered by Northwest Agency"
            clicked={this.makePdf}/>
          </form>
      </React.Fragment>
    )
  }
}

export default Form;

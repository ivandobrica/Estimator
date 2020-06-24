import React, {Component} from 'react'

class Button extends Component {

  addEmptyItem() {
    let clickedProp = this.props.clicked;

    if (clickedProp) {
      this.props.clicked()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="btn" onClick={this.addEmptyItem.bind(this)}>
        </div>
      </React.Fragment>
    );
  }
}
export default Button;

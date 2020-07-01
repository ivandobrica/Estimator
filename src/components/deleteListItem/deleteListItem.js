import React, {Component} from 'react'

class DeleteListItem extends Component {

  onClick() {
    let clickedProp = this.props.clicked;

    if (clickedProp) {
      this.props.clicked()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="btn" onClick={this.onClick.bind(this)}>
          X
        </div>
      </React.Fragment>
    );
  }
}
export default DeleteListItem;

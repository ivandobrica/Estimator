import React, {Component} from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
  }

  addEmptyItem() {
   console.log("Hello")
  };

  render() {
    return (
      <React.Fragment>
        <div className="btn" onClick={this.addEmptyItem.bind(this)}>
          Add Task
        </div>
      </React.Fragment>
    );
  }
}

export default Button;

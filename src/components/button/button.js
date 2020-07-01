import React, {Component} from 'react'

class Button extends Component {

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
            {this.props.name}
            <p>{this.props.description}</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Button;

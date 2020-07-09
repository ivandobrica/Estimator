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
        <div className={this.props.className ? `btn ${this.props.className}` : 'btn'} onClick={this.onClick.bind(this)}>
          <div>
            {this.props.name}
            <p>{this.props.description}</p>
          </div>
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" version="1.0" width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
              <path d="M355 360 c-4 -6 8 -28 25 -50 l31 -40 -198 -2 c-168 -3 -198 -5 -198 -18 0 -13 30 -15 198 -18 l198 -2 -32 -41 c-24 -30 -29 -43 -20 -52 9 -9 27 4 73 51 l63 62 -60 60 c-61 62 -69 67 -80 50z"/>
            </g>
          </svg>
        </div>
      </React.Fragment>
    )
  }
}

export default Button;

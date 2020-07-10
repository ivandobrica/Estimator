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
          <svg className="paper" xmlns="http://www.w3.org/2000/svg" version="1.0" width="26.000000pt" height="26.000000pt" viewBox="0 0 26.000000 26.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
              <path d="M50 175 c0 -50 4 -85 10 -85 6 0 10 32 10 75 l0 75 75 0 76 0 -3 -107 c-3 -93 -5 -108 -20 -111 -13 -2 -18 3 -18 17 0 12 5 21 10 21 6 0 10 5 10 10 0 7 -30 10 -81 8 -65 -2 -84 -7 -93 -21 -8 -12 -8 -22 0 -35 9 -14 28 -18 96 -20 117 -4 118 -3 118 144 l0 114 -95 0 -95 0 0 -85z m110 -135 c0 -18 -7 -20 -60 -20 -53 0 -60 2 -60 20 0 18 7 20 60 20 53 0 60 -2 60 -20z"/>
            </g>
          </svg>


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

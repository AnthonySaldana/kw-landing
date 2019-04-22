import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { logo } = this.props
    return (
        <div className="ctawrapper grid" >
            <div className="col-half">
                <img src={logo} />
            </div>
            <div className="col-half"></div>
        </div>
    )
  }
}

export default Header

import React, { Component } from 'react'
import Button from '../global/button'
import './header.scss'

class Header extends Component {
  render() {
    const { logo, logoalt } = this.props
    return (
        <div className="headerwrapper grid" >
            <div className="col-half">
                <img src={logo} alt={logoalt} className="logo" />
            </div>
            <div className="col-half">
              <Button type="clear"/>
            </div>
        </div>
    )
  }
}

export default Header

import React, { Component } from 'react'
import Logo from './footer-logo.svg'
import './footer.scss'

class Footer extends Component {
  render() {
    const { copyright } = this.props
    return (
      <div className="footerwrapper">
        <img src={Logo} />
        <div dangerouslySetInnerHTML={{ __html: copyright }}></div>
      </div>
    )
  }
}

export default Footer

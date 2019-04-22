import React, { Component } from 'react'
import './button.scss'

class Button extends Component {
  render() {
    const { text } = this.props
    return (
        <div className="ctabutton" >
            <span>{ text ? text : "Shop Now" }</span>
        </div>
    )
  }
}

export default Button

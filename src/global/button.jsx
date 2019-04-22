import React, { Component } from 'react'
import './button.scss'
import clearbtnbg from './clearbtn.png'

class Button extends Component {
  render() {
    const { text, type, handleClick } = this.props
    let classNames = 'ctabutton'
    switch (type) {
      case 'clear':
        classNames += ' clearbtn'
      break
      case 'link':
        classNames += ' linkbtn'
      break
      default:
      break
    }
    return (
        <div className={ classNames } style={{ backgroundImage: `url(${type === 'clear' ? clearbtnbg : ''})` }} onClick={handleClick} >
            <span>{ text ? text : "Shop Now" }</span>
        </div>
    )
  }
}

export default Button

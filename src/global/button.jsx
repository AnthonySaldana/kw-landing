import React, { Component } from 'react'
import './button.scss'
import clearbtnbg from './clearbtn.png'

class Button extends Component {
  render() {
    const { text, type, handleClick, link } = this.props
    let isSubmit = false;
    let classNames = 'ctabutton'
    switch (type) {
      case 'clear':
        classNames += ' clearbtn'
      break
      case 'clear-submit':
        classNames += ' clearbtn'
        isSubmit = true;
      break
      case 'link':
        classNames += ' linkbtn'
      break
      default:
      break
    }
    return (
      <React.Fragment>
      { isSubmit ? (<button type="submit" className={ classNames } style={{ backgroundImage: `url(${clearbtnbg})` }} onClick={handleClick} >
      <span>{ text ? text : "Shop Now" }</span>
      </button>) : (<a href={ link } className={ classNames } style={{ backgroundImage: `url(${type === 'clear' ? clearbtnbg : ''})` }} onClick={handleClick} >
      <span>{ text ? text : "Shop Now" }</span>
      </a>)}
    </React.Fragment>
    )
  }
}

export default Button

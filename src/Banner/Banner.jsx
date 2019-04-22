import React, { Component } from 'react'
import Button from '../global/button'
import './banner.scss'

class Banner extends Component {
  render() {
    const { header, content, image, mobileimage } = this.props
    return (
      <div className="bannerwrapper grid" >
          <div className="row-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="row-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
          <div className="col-full">
            <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <Button />
          </div>
      </div>
    )
  }
}

export default Banner

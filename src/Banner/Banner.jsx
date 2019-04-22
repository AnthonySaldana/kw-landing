import React, { Component } from 'react'
import './banner.scss'

class Banner extends Component {
  render() {
    const { header, content, image, mobileimage } = this.props
    return (
      <div className="bannerwrapper grid" >
          <div className="row-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="row-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
          <div className="col-half"></div>
          <div className="col-half">
            <div className="bannercontentwrapper">
              <h2 className="header" dangerouslySetInnerHTML={{ __html: header }}></h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </div>
      </div>
    )
  }
}

export default Banner

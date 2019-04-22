import React, { Component } from 'react'
import Button from '../global/button'
import './cta.scss'

class CTA extends Component {
  render() {
    const { header, subheader, content, image, mobileimage, flip } = this.props
    return (
      <div className="ctawrapper grid" >
      { flip ? <React.Fragment>
          <div className="col-half col-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="col-half col-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
          <div className="col-half">
          <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
          { subheader ? <p className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></p> : null }
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <Button />
        </div>        
      </React.Fragment> : <React.Fragment>
        <div className="col-half">
          <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
          { subheader ? <p className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></p> : null }
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <Button />
        </div>        
        <div className="col-half col-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="col-half col-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
      </React.Fragment> }
    </div>
    )
  }
}

export default CTA

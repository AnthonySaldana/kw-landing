import React, { Component } from 'react'
import Button from '../global/button'
import './cta.scss'

class CTA extends Component {
  render() {
    const { header, subheader, content, image, mobileimage, flip, btnlink } = this.props
    return (
      <div className="ctawrapper grid" >
      { flip ? <React.Fragment>
          <div className="col-half col-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
          <div className="col-half col-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
          <div className="col-half">
            <div className="ctacontentwrapper">
              <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
              { subheader ? <h3 className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></h3> : null }
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
              <Button link={btnlink} />
            </div>
        </div>        
      </React.Fragment> : <React.Fragment>
        <div className="col-half">
          <div className="ctacontentwrapper">
            <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
            { subheader ? <h3 className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></h3> : null }
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <Button link={btnlink} />
          </div>
        </div>        
        <div className="col-half col-img sm-hide" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="col-half col-img lg-hide" style={{ backgroundImage: `url(${mobileimage})` }}></div>
      </React.Fragment> }
    </div>
    )
  }
}

export default CTA

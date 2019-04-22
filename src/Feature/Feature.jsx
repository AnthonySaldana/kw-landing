import React, { Component } from 'react'
import Button from '../global/button'
import './feature.scss'

class Feature extends Component {
  render() {
    const { header, subheader, content, image } = this.props
    return (
      <div className="featurewrapper grid" >
        <div className="col-half">
          <div className="featurecontentwrapper">
            <h2 className="header" dangerouslySetInnerHTML={{ __html: header }}></h2>
            { subheader ? <p className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></p> : null }
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <Button type="link" text="Learn More" />
          </div>
        </div>
        <div className="col-half col-img">
          <img alt="feature" src={image} className="featureimage" />
        </div>
      </div>
    )
  }
}

export default Feature

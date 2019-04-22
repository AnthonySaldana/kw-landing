import React, { Component } from 'react'
import Button from '../global/button'
import './feature.scss'

class Feature extends Component {
  render() {
    const { header, subheader, content, image } = this.props
    return (
      <div className="ctawrapper grid" >
        <div className="col-half">
          <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
          { subheader ? <p className="subheader" dangerouslySetInnerHTML={{ __html: subheader }}></p> : null }
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <Button type="link" text="Learn More" />
        </div>
        <div className="col-half col-img" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    )
  }
}

export default Feature

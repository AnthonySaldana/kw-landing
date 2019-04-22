import React, { Component } from 'react'
import './approach.scss'

class Approach extends Component {
  render() {
    const { header, subheader, rows } = this.props
    return (
      <div className="approachwrapper">
        <h2 dangerouslySetInnerHTML={{ __html: header }}></h2>
        <p dangerouslySetInnerHTML={{ __html: subheader }}></p>
        { rows.map(( row ) => {
            return (
              <div className="grid">
                <div className="col-half">
                  <img alt={row.header} src={row.image} />
                </div>
                <div className="col-half">
                  <h3>{ row.header }</h3>
                  <p>{ row.content }</p>
                </div>                
              </div>
            )
        }) }
      </div>
    )
  }
}

export default Approach

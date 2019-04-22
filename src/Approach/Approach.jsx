import React, { Component } from 'react'
import './approach.scss'

class Approach extends Component {
  render() {
    const { header, subheader, rows } = this.props
    let key = 0
    return (
      <div className="approachwrapper">
        <h2 className="header" dangerouslySetInnerHTML={{ __html: header }}></h2>
        <p className="subhheader" dangerouslySetInnerHTML={{ __html: subheader }}></p>
        { rows.map(( row ) => {
            key += 1
            return (
              <div className="grid" key={key}>
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

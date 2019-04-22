import React, { Component } from 'react'
import './shopnow.scss'

class ShopNow extends Component {
  render() {
    const { header, subheader, products } = this.props
    return (
      <div className="approachwrapper">
        <h2 dangerouslySetInnerHTML={{ __html: header }}></h2>
        <p dangerouslySetInnerHTML={{ __html: subheader }}></p>
        <div className="grid">
        { products.map(( product ) => {
            return (
              <div className="col-fifth">
                <img alt={product.header} src={product.image} />
                <p>{ product.title }</p>
              </div>                
            )
        }) }
        </div>
      </div>
    )
  }
}

export default ShopNow

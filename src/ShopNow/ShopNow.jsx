import React, { Component } from 'react'
import './shopnow.scss'

class ShopNow extends Component {
  render() {
    const { header, subheader, products } = this.props
    let key = 0
    return (
      <div className="shopnowwrapper">
        <h3 className="header" dangerouslySetInnerHTML={{ __html: header }}></h3>
        <p dangerouslySetInnerHTML={{ __html: subheader }}></p>
        <div className="grid">
        { products.map(( product ) => {
            key += 1
            return (
              <div className="col-fifth mb-half" key={key}>
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

import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './bestsellers.scss'

class BestSellers extends Component {
  render() {
    const { products, header, subheader } = this.props
    let productKey = 0
    return (
      <div className="slide-container">
        <h2 className="header" dangerouslySetInnerHTML={{ __html: header }}></h2>
        <p className="subhheader" dangerouslySetInnerHTML={{ __html: subheader }}></p>
        <Carousel showArrows={true} showThumbs={false} centerMode={true} centerSlidePercentage={23} infiniteLoop={true} swipeable={true}
        statusFormatter={(current, total) => {return(`${current}/${total}`)}}>
          { products.map((product) => {
              productKey += 1
              return ( <div key={productKey} className="carousel-slide">
                <img
                  src={product.image}
                  alt="First slide"
                />
              </div> )
          }) }
        </Carousel>
      </div>
    )
  }
}

export default BestSellers

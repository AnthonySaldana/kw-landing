import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { withBreakpoints } from 'react-breakpoints'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './bestsellers.scss'

class BestSellers extends Component {
  render() {
    const { products, header, subheader, currentBreakpoint } = this.props
    let productKey = 0
    return (
      <div className="slide-container">
        <h2 className="header" dangerouslySetInnerHTML={{ __html: header }}></h2>
        <p className="subhheader" dangerouslySetInnerHTML={{ __html: subheader }}></p>
        <Carousel showArrows={true} showThumbs={false} centerMode={true} centerSlidePercentage={ currentBreakpoint === "base" ? 100 : 23 } infiniteLoop={true} swipeable={true}
        statusFormatter={(current, total) => {return(`${current}/${total}`)}}>
          { products.map((product) => {
              productKey += 1
              return ( <div key={productKey} className="carousel-slide">
                <a href={product.link} style={{ width: "100%", height: "100%" }}>
                  <img
                    src={product.image}
                    alt="front slide"
                    className="frontimage"
                  />
                  <img
                    src={product.flipimage}
                    alt="flip slide"
                    className="flipimage"
                  />
                </a>
              </div> )
          }) }
        </Carousel>
      </div>
    )
  }
}

export default withBreakpoints( BestSellers )

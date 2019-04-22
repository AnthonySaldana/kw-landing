import React, { Component } from 'react'
import Logo from './footer-logo.svg'
import './footer.scss'

class Footer extends Component {
  render() {
    const { copyright, links, social } = this.props
    return (
      <div className="footerwrapper">
        <div className="grid">
          <div className="col-quarter mb-four mb-half">
            <div className="logowrapper">
              <img src={Logo} />
              <div dangerouslySetInnerHTML={{ __html: copyright }}></div>
            </div>
          </div>
          <div className="col-quarter mb-two mb-full">
            <div className="links">
              { links.map((link) => {
                  return (
                    <li><a href={link.link} dangerouslySetInnerHTML={{ __html: link.content }}></a></li>
                  )
              }) }
            </div>
          </div>
          <div className="col-quarter mb-three mb-half">
            <div className="social">
              { social.map((link) => {
                    return (
                      <li><a href={link.link} dangerouslySetInnerHTML={{ __html: link.type }}></a></li>
                    )
                }) }
            </div>
          </div>
          <div className="col-quarter mb-one mb-full">
            <div className="newsletter"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

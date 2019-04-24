import React, { Component } from 'react'
import Logo from './footer-logo.svg'
import './footer.scss'
import Newsletter from '../Newsletter/Newsletter';

class Footer extends Component {
  render() {
    const { copyright, links, social } = this.props
    let linkkey = 0
    let socialkey = 0
    return (
      <div className="footerwrapper">
        <div className="grid">
          <div className="col-quarter mb-four mb-half logo-col">
            <div className="logowrapper">
              <img src={Logo} />
              <div dangerouslySetInnerHTML={{ __html: copyright }}></div>
            </div>
          </div>
          <div className="col-quarter mb-two mb-full links-col">
            <div className="links">
              { links.map((link) => {
                  linkkey += 1
                  return (
                    <li key={linkkey}><a href={link.link} dangerouslySetInnerHTML={{ __html: link.content }}></a></li>
                  )
              }) }
            </div>
          </div>
          <div className="col-quarter mb-three mb-half social-col">
            <div className="social">
              { social.map((link) => {
                    socialkey += 1
                    return (
                      <li key={socialkey}><a href={link.link} dangerouslySetInnerHTML={{ __html: link.type }}></a></li>
                    )
                }) }
            </div>
          </div>
          <div className="col-quarter mb-one mb-full newsletter-col">
            <div className="newsletter">
                <Newsletter />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

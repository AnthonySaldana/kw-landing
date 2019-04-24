import React, { Component } from 'react'
import logo from './logo.png'
import './App.scss'
import Approach from './Approach/Approach'
import Banner from './Banner/Banner'
import BestSellers from './BestSellers/BestSellers'
import Cta from './CTA/CTA'
import Footer from './Footer/Footer'
import Feature from './Feature/Feature'
import Header from './Header/Header'
import ShopNow from './ShopNow/ShopNow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    fetch("https://qontent.app/wp-json/wp/v2/posts?slug=kw-landing")
    .then(res => res.json())
    .then(( response ) => {
      const data = response[0]['post-meta-fields'].data[0]

      this.setState({
        data: JSON.parse(data).content
      })
    }, ( error ) => {
      console.log("An error occurred")
    })
  }
  signUp = () => {
    console.log("sign up")
  }

  render() {
    const { data } = this.state
    let header, approach, banner, cta, feature, bestsellers, shop, footer

    data.map( ( curr, index ) => {
      // eslint-disable-next-line default-case
      switch ( curr.type ) {
      case 'header':
          header = curr

          break
      case 'approach':
          approach = curr

          break
      case 'banner':
          banner = curr
        break
      case 'cta':
          cta = curr

          break
      case 'feature':
          feature = curr

          break
      case 'bestsellers':
          bestsellers = curr

          break
      case 'shop':
          shop = curr

          break
      case 'footer':
          footer = curr

          break
      }

      return null
  })
    return (
      <div className="App">
        <Header logo={logo} logoalt="Kjaer Weis Logo" btnlink={ header ? header.navlink : "" } />
        <Cta header={header ? header.header : null} btnlink={ header ? header.btnlink : "" } content={header ? header.content : null} image={header ? header.image : null} mobileimage={header ? header.mobileimage : null} />
        <Approach header={approach ? approach.header : null} subheader={approach ? approach.subheader : null} rows={approach ? approach.rows : []} />
        <Cta header={cta ? cta.header : null} subheader={cta ? cta.subheader : null} content={cta ? cta.content : null} btnlink={ cta ? cta.btnlink : "" }  image={cta ? cta.image : null} flip={true} mobileimage={cta ? cta.mobileimage : null} />
        <Feature btnlink={ feature ? feature.btnlink : "" } header={feature ? feature.header : null} content={feature ? feature.content : null} image={feature ? feature.image : null} />
        <BestSellers header={ bestsellers ? bestsellers.header : null } subheader={ bestsellers ? bestsellers.subheader : null } products={bestsellers ? bestsellers.products : []} />
        <Banner image={banner ? banner.image : null} header={banner ? banner.header : null} subheader={banner ? banner.subheader : null} content={banner ? banner.content : null} mobileimage={ banner ? banner.mobileimage : null} />
        <ShopNow products={shop ? shop.products : []} header={shop ? shop.header : null} />
        <Footer logo={footer ? footer.logo : null} copyright={footer ? footer.copyright : null} links={footer ? footer.links : []} social={footer ? footer.social : []} signup={this.handleSignUp} />
      </div>
    )
  }
}

export default App

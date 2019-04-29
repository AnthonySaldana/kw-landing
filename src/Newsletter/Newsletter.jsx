import React, { Component } from 'react'
import './newsletter.scss'
import Button from '../global/button'
import { withBreakpoints } from 'react-breakpoints'

class Newsletter extends Component {
constructor(props) {
    super(props)
    this.state = {
        email: ''
    }
}

handleSubmit = () => {
    return false
}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

render() {
    const { email } = this.state
    const { tabletbuttonimage, currentBreakpoint } = this.props
    return (
      <div className="newsletterwrapper">
        <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="Sign up to our mailing list" />
        <Button type="clear" text="SUBSCRIBE" />
      </div>
    )
  }
}

export default withBreakpoints( Newsletter )

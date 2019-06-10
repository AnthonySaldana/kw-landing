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
    var _learnq = _learnq || [];
    const email = this.state.email;

    let something = _learnq.push(['identify', {
      // Change the line below to dynamically print the user's email.
      '$email' : '{{ email }}'
    }]);
    console.log("test");
    console.log(something);

}

handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
}

render() {
    const { email } = this.state
    const { tabletbuttonimage, currentBreakpoint, formUrl } = this.props
    return (
      <form className="newsletterwrapper" action={formUrl}>
        <input name="email" type="text" value={email} onChange={this.handleChange} placeholder="Sign up to our mailing list" />
        <Button type="clear-submit" text="SUBSCRIBE" handleClick={this.handleSubmit} />
      </form>
    )
  }
}

export default withBreakpoints( Newsletter )

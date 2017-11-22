import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class OtherPage extends Component {
  render() {
    return (
      <Container>
        <Container text>
            This is the Other Page
        </Container>
        <Container text>
            <Link to='/'>Click here for Home page</Link>
        </Container>
      </Container>
    )
  }
}

export default OtherPage

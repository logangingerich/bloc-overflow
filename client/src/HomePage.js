import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Container text>
            This is the Home Page
        </Container>
        <Container text>
            <Link to='/other'>Click here for Other page</Link>
        </Container>
      </Container>
    )
  }
}

export default HomePage

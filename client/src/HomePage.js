import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class HomePage extends Component {
  render() {
    const { questions } = this.props
    return (
      <Container>
        <Container text>
            This is the Home Page
        </Container>
        <Container text>
            <Link to='/other'>Click here for Other page</Link>
        </Container>
        {questions.map((question) =>
          <Container>
              <h3>{question.title}</h3>
              <p>{question.description}</p>
          </Container>
        )}
      </Container>
    )
  }
}

export default HomePage

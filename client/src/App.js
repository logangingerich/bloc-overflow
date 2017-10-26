import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import OtherPage from './OtherPage'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {}
    this.getData = this.getData.bind(this)
  }
  componentDidMount () {
    // this.getData()
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getData () {
    this.fetch('api/')
      .then(data => {
        this.setState({data: data})
      })
  }

  render () {
    let data = this.state;
    return data
    ? <Container className="app">
        <Route exact path='/' render={() => (
          <HomePage />
        )}/>
        <Route path='/other' render={() => (
          <OtherPage />
        )}/>
      </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App

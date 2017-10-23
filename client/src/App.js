import React, { Component } from 'react'
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
    ? <Container text>
        This is the Begining
    </Container>
    : <Container text>
      <Dimmer active inverted>
        <Loader content='Loading' />
      </Dimmer>
    </Container>
  }
}

export default App

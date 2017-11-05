import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import OtherPage from './OtherPage'
import Auth from 'j-toker';
import PubSub from 'pubsub-js';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

Auth.configure({
  apiUrl: 'http://localhost:3000/api',
  storage: 'localStorage',
  confirmationSuccessUrl: '/',
  handleLoginResponse: (resp) => {
    console.log(resp)
    return resp.data;
  }
});

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: Auth.user
    }
    this.getData = this.getData.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
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

  componentWillMount() {
    PubSub.subscribe('auth', function() {
      this.setState({user: Auth.user});
    }.bind(this));
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

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import OtherPage from './OtherPage'
import QuestionForm from './QuestionForm'
import LoginForm from './components/LoginForm'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      questions: []
    }
    this.getData = this.getData.bind(this)
    this.getQuestions = this.getQuestions.bind(this)
  }
  componentDidMount () {
    this.getQuestions()
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

  getQuestions () {
    this.fetch('/api/questions')
      .then(questions => {
        this.setState({questions: questions})
      })
  }

  render () {
    let data = this.state
    return data
    ? <Container className="app">
        <LoginForm />
        <Route exact path='/' render={() => (
          <HomePage
            questions = { this.state.questions }
          />
        )}/>
        <Route path='/other' render={() => (
          <OtherPage />
        )}/>
        <Route path='/question/create' render={() => (
          <QuestionForm />
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

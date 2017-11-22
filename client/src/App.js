import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import {Container, Dimmer, Loader} from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window
        .fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }

  getQuestions() {
    this.fetch('/api/questions').then(questions => {
      this.setState({questions: questions});
    });
  }

  render() {
    let data = this.state;
    const routes = (
      <Container className="app">
        <Route exact path="/" render={() => <HomePage questions={this.state.questions} />} />
        <Route path="/question/create" render={() => <QuestionForm />} />
      </Container>
    )

    const loader = (
      <Container text>
        <Dimmer active inverted>
          <Loader content="Loading" />
        </Dimmer>
      </Container>
    )

    return data ? routes : loader;
  }
}

export default App;

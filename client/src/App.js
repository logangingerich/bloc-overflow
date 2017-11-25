// @flow
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import {Container, Dimmer, Loader} from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const routes = (
      <div>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/question/create" render={() => <QuestionForm />} />
      </div>
    )

    const loader = (
      <Container text>
        <Dimmer active inverted>
          <Loader content="Loading" />
        </Dimmer>
      </Container>
    )

    return routes;
  }
}

export default App;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import QuestionForm from './QuestionForm';
import {Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider} from 'semantic-ui-react';

class HomePage extends Component {
  render() {
    const {questions} = this.props;
    return (
      <Container>
        <h1 className="ui header">Bloc Overflow</h1>
        <Container text>
          <Link to="/question/create">Create a question</Link>
        </Container>
        <Container>
          {questions.map(question => (
            <p>
              <h3 className="ui header">{question.title}</h3>
              <span>{question.description}</span>
            </p>
          ))}
        </Container>
      </Container>
    );
  }
}

export default HomePage;

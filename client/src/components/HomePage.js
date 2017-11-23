import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container} from 'semantic-ui-react';

class HomePage extends Component {
  constructor(props) {
    super(props);
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
    return (
      <Container>
        <h1 className="ui header">Bloc Overflow</h1>
        <Container text>
          <Link to="/question/create">Create a question</Link>
        </Container>
        <Container>
          {this.state.questions.map(question => (
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

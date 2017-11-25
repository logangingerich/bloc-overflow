import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from 'semantic-ui-react';
import blocLogo from '../assets/bloc_logo.png';

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
      <div>
        <div className="header">
          <img src={blocLogo} alt="Bloc"/>
          <h1 className="overflow">&nbsp; Overflow</h1>
          <Link className="ui primary button create" to="/question/create"> Create a question </Link>
        </div>
        <div className="question">
          {this.state.questions.map(question => (
            <p>
              <h2 className="title">{question.title}</h2><br></br>
              <span className="description">{question.description}</span>
              <hr></hr>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;

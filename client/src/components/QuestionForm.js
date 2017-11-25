import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Button} from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {redirect: false};

    this.handleClick = this.handleClick.bind(this);
  }

  post(endpoint, data) {
    return new Promise((resolve, reject) => {
      window
        .fetch(endpoint, data)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }

  handleClick() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    if (!title) {
      alert('please enter a question');
      return;
    }

    this.post('/api/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title, description}),
    })
      .then(() => this.setState({redirect: true}))
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const {redirect} = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="inputContainer">
        <h1 className="header" id="questionFormHeader">What is your question?</h1>
        <div className="ui input">
          <input id="title" type="text" placeholder="Enter question" />
          <br />
        </div>
        <div className="ui input">
          <input id="description" type="text" placeholder="Enter details" />
          <br />
        </div>
        <div>
          <Button className="ui green button" onClick={this.handleClick}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default QuestionForm;

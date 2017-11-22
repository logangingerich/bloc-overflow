import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider} from 'semantic-ui-react';

class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {redirect: false};

    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    if (!title) {
      alert('please enter a question');
      return;
    }

    this.fetch('/api/questions', {
      method: 'POST',
      body: {title, description},
    })
      .then(() => this.setState({redirect: true}), alert('question saved'))
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
      <Container>
        <h1 className="ui header">What is your question?</h1>
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
      </Container>
    );
  }
}

export default QuestionForm;

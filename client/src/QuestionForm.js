import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class QuestionForm extends Component {
  constructor(props) {
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log("button clicked");

      axios.post('/api/questions', {
          title: document.getElementById("title").value,
          description: document.getElementById("description").value
        })
        .then(function (response) {
          console.log("questions created")
          console.log(response);
          //<Redirect from="/question/create" to="/" />;
          window.location.href="/";
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  render() {
    return (
      <Container>
        <Container text>
          this is the question page
        </Container>
        <Container text>
          What is your question?
        </Container>
        <div class="ui input">
          <input id="title" type="text" placeholder="Enter question" />
          <input id="description" type="text" placeholder="Enter details about your question" />
          <Button onClick={this.handleClick} class="ui button">Submit</Button>
        </div>
      </Container>
    )
  }
}

// On submit of form create the question
// redirect to the home
// Create method POST /api/question

export default QuestionForm

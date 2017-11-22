import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class QuestionForm extends Component {


  constructor(props) {
      super(props);

      this.state = { redirect: false }

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      var title = document.getElementById("title").value;
      var description = document.getElementById("description").value;
      if (!title) {
        alert("please enter a question");
        return;
      }

      axios.post('/api/questions', {
        title: title,
        description: description
      })
      .then(() => this.setState({ redirect: true }),
        alert("question saved")
      )
      .catch(function (error) {
        console.log(error);
      });
    }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <Container text>
          What is your question?
        </Container>
        <div class="ui input">
          <input id="title" type="text" placeholder="Enter question" />
          <br />
        </div>
        <div class="ui input">
          <input id="description" type="text" placeholder="Enter details" />
          <br />
        </div>
        <Button class="ui green button" onClick={ this.handleClick }>Submit</Button>
      </Container>
    )
  }
}

export default QuestionForm

import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class QuestionForm extends Component {


  constructor(props) {
      super(props);

      this.state = {
        redirect: false
      }


      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log("button clicked");
      console.log(this.state.redirect);

      axios.post('/api/questions', {
          title: document.getElementById("title").value,
          description: document.getElementById("description").value
        })
        .then(() => this.setState({ redirect: true }),
        window.alert("question saved")
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
          this is the question page
        </Container>
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
        <Button class="ui green button" onClick={this.handleClick}>Submit</Button>
      </Container>
    )
  }
}

// On submit of form create the question
// redirect to the home
// Create method POST /api/question

export default QuestionForm

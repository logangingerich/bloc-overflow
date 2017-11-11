import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class QuestionForm extends Component {
  constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log("button clicked");
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

  render() {
    return (
      <Container>
        <Container text>
          This is the question Page
        </Container>
        <Container text>
          What is your question?
        </Container>
        <div class="ui input">
          <input type="text" placeholder="Enter question" />
          <Button onClick ={this.handleClick} class="ui button">Submit</Button>
        </div>
      </Container>
    )
  }
}

// On submit of form create the question
// redirect to the home
// Create method POST /api/question

export default QuestionForm

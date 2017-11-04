import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'
import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <Container>
        <Container text>
            This is the Home Page
        </Container>
        <Container text>
            <Link to='/other'>Click here for Other page</Link>
        </Container>
        <Container text>
          <Link to='/question/create'>Create a question now</Link>
        </Container>
      </Container>
    )
  }
}

// class questionForm extends Component {
//   render() {
//     return (
//       <div>This is a question page
//       </div>
//
//       <Container>
//         <Container text>
//             This is the question Page
//         </Container>
//       </Container>
//     )
//   }
// }

export default Home

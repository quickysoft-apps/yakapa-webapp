import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Button, Menu, Segment, Container, Grid, Header, List } from 'semantic-ui-react'

export default class Landing extends React.Component {
 
  login = () => {
    this.props.history.push('/sign-in')
  }

  signup = () => {
    this.props.history.push('/sign-up')
  }

  render() {    
    return (
      <div>
        <Segment className='masthead' inverted vertical color='black'>
          <Container>
            <Menu className='large' secondary inverted pointing>
              <Menu.Menu position='right'>
                <Button inverted onClick={this.login}>Log In</Button>
                <Button inverted onClick={this.signup}>Sign Up</Button>
              </Menu.Menu>
            </Menu>
          </Container>

          <Container text>
            <Header inverted as='h1'>Yakapa ‒ The Software Care Platform</Header>
            <h2>Want to handle software installations in complex and versatile environments easely ? Sign up now and join our software care platform.</h2>
            <Button size='huge' primary onClick={this.signup}>Sign Up</Button>
          </Container>

        </Segment>

        <Segment vertical>
        </Segment>

        <Segment className="footer" inverted vertical>
          <Container>
            <Grid stackable divided>
              <Grid.Column width={3}>
                <Header inverted as='h4'>About</Header>
                <List inverted link>
                  <Link to="/contacts" className="item">Contact</Link>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
              </Grid.Column>
              <Grid.Column width={7}>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>

      </div>
    )
  }
}

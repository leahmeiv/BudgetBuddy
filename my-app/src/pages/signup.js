import React from 'react';
import '../css/about.css';
import { Link, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Form, Header, Message, Grid, Checkbox} from 'semantic-ui-react';
import '../css/signup.css'

class Signup extends React.Component {

  render()
  {
    return (
      <div>
        <div>
          <Container fluid className="signup-bg">
            <Header size="huge" textAlign="center">
              <div className="form-text">Time to start saving!</div>
            </Header>
            <Header size="large" textAlign="center">
              <div className="form-text">Sign up here</div>
            </Header>
            <Container vertical>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form className="form-text">
                      <Form.Field>
                        <label>
                          <div className="form-text">First Name</div>
                        </label>
                        <input placeholder="Enter your first name"/>
                      </Form.Field>
                      <Form.Field>
                        <label>
                          <div className="form-text">Last Name</div>
                        </label>
                        <input placeholder="Enter your last name"/>
                      </Form.Field>
                      <Form.Field>
                        <label>
                          <div className="form-text">Email</div>
                        </label>
                        <input placeholder="Enter your email address"/>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Form>
                      <Form.Field className="form-text" required={true}>
                        <div className="form-text">Password</div>
                        <input placeholder="Enter your password"/>
                      </Form.Field>
                      <Form.Field className="form-text" required={true}>
                        <div className="form-text">Confirm Password</div>
                        <input placeholder="Re-enter your password"/>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Form inverted>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                  </Form>
                </Grid.Row>
                <Grid.Row>
                  <Button inverted color="white" type="submit">Sign up</Button>
                </Grid.Row>
              </Grid>
              <Message info attached="bottom" >
                Already have an account? Sign in <Link to="/login">here</Link>
              </Message>
            </Container>

          </Container>
        </div>
      </div>
    );
  }
}


export default Signup;
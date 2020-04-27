import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Form, Header, Message} from 'semantic-ui-react';
import '../css/login.css'

class Login extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Container fluid className="login-bg">
            <Header size="huge" textAlign="center">
              <div className="form-text">Ready to Track Your Exepenses?</div>
            </Header>

            <Header size="large" textAlign="center">
              <div className="form-text">Login here!</div>
            </Header>
            <Container vertical>
              <Form className="form-text">
                <Form.Field>
                  <label>
                    <div className="form-text">Email</div>
                  </label>
                  <input placeholder="Enter your email address"/>
                </Form.Field>

                <Form.Field className="form-text">
                  <div className="form-text">Password</div>
                  <input placeholder="Enter your password"/>
                </Form.Field>
                <Button inverted color="white" type="submit">Sign in</Button>
              </Form>
              <Message info attached="bottom" >
                Don't have an account? Sign up <Link to="/signup">here</Link>
              </Message>
            </Container>

          </Container>
        </div>
      </div>
    );
  }
}


export default Login;
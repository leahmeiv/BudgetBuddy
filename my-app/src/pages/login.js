import React from 'react';
import axios from 'axios';
import '../css/about.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Form, Header, Message} from 'semantic-ui-react';
import '../css/login.css'

class Login extends React.Component {
  // Initialize component states with properties for login
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      email: '',
      password: '',
      errors: {}
    };
  }

  //handing changes in login fields
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  //handling submission of login form
  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

   // axios.post('http://localhost:5000/api/user/login', user)
     //.then(res => console.log(res.data))
     //.catch(err => console.log(err));
  }

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
                <Form className="form-text" onSubmit={this.onSubmit}>
                  <Form.Field>
                    <label>
                    <div className="form-text">Email</div>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your email address"
                      value={this.state.email}
                      onChange={this.onChange}
                      id="email"
                    />
                  </Form.Field>

                  <Form.Field className="form-text">
                    <div className="form-text">Password</div>
                    <input
                      placeholder="Enter your password"
                      type="password"
                      required
                      value={this.state.password}
                      onChange={this.onChange}
                      id="password"
                    />
                  </Form.Field>
                  <Button inverted type="submit">Sign in</Button>
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
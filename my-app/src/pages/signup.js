import React from 'react';
import '../css/about.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Form, Header, Message, Grid, Checkbox} from 'semantic-ui-react';
import '../css/signup.css'

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      signupError: '',
      email: '',
      password: '',
      conPass: '',
      firstName: '',
      lastName: '',
      errors: {}
    };
  }

  //handing changes in login fields
  onChangeEmail = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };


  //handling submission of login form
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      conPass: this.state.conPass
    };

    console.log(newUser);
    //axios.post('http://localhost:5000/api/user/register', user)
    //.then(res => console.log(res.data));
  }


  render() {
    const {errors} = this.state;
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
              <Form className="form-text" onSubmit={this.onSubmit} >
               <Grid>
                 <Grid.Row>
                   <Grid.Column width={8}>
                <Form.Field>
                  <label>
                    <div className="form-text">First Name</div>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your first name"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    id="firstName"
                  />
                </Form.Field>
                <Form.Field>
                  <label>
                    <div className="form-text">Last Name</div>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your last name"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    id="lastName"
                  />
                </Form.Field>
                <Form.Field>
                  <label>
                    <div className="form-text">Email</div>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.onChange}
                    id="email"
                  />
                </Form.Field>
                   </Grid.Column>

                   <Grid.Column width={8}>
                <Form.Field className="form-text" required={true}>
                  <div className="form-text">Password</div>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.onChange}
                    id="password"
                  />
                </Form.Field>

                <Form.Field className="form-text" required={true}>
                  <div className="form-text">Confirm Password</div>
                  <input
                    type="password"
                    required
                    placeholder="Re-enter your password"
                    value={this.state.conPass}
                    onChange={this.onChange}
                    id="conPass"
                  />
                </Form.Field>
                   </Grid.Column>
                 </Grid.Row>

                 <Grid.Row>
                <Form.Field>
                  <Form.Checkbox
                    label = "I agree to the terms and conditions"
                    required
                  />
                </Form.Field>
                 </Grid.Row>

                 <Grid.Row>
                <Button inverted color="white" type="submit">Sign up</Button>
                 </Grid.Row>
               </Grid>
              </Form>

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
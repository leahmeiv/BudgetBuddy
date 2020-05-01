import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { firstname:'', lastname: '',email: '', password: '', confirmPassword:'', role: 'user', error: '', redirectToReferer: false };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  /** Handle Signup submission using Meteor's account mechanism. */
  handleSubmit() {
    const { firstname, lastname, email, password, confirmPassword, role } = this.state;
    Meteor.call('serverCreateUser', firstname, lastname, email, password, confirmPassword, role, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={'/signin'}/>;
    }

    return (
      <Container fluid className="signup-bg">
        <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
          <Grid.Column>
            <Header size="huge" textAlign="center" inverted>
              Register your account!
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Grid column={2} centered>
                  <Grid.Row>
                  <Grid.Column width={8}>
                    <Form.Input
                      label="First Name"
                      name="firstname"
                      type="String"
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                    <Form.Input
                      label="Last Name"
                      name="lastname"
                      placeholder="Last Name"
                      type="String"
                      onChange={this.handleChange}
                    />

                  </Grid.Column>

                  <Grid.Column width={8}>
                <Form.Input
                  label="Email"
                  icon="user"
                  iconPosition="left"
                  name="email"
                  type="email"
                  placeholder="E-mail address"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Password"
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="Confirm Password"
                  icon="lock"
                  iconPosition="left"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  onChange={this.handleChange}
                />

                  </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Form.Button content="Submit"/>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Form>
            <Message>
              Already have an account? Login <Link to="/signin">here</Link>
            </Message>
            {this.state.error === '' ? (
              ''
            ) : (
              <Message
                error
                header="Registration was not successful"
                content={this.state.error}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;

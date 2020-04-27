import React from 'react';
import { Image, Button,Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container className="landing-bg" >
          <Image  size='massive' className="ui fluid image"
                  src={'images/home-background.jpeg'}/>
          <p className="slogan1">
            <b>BE MY BUDGET BUDDY!</b>
          </p>
          <p className="slogan2">
            It's time to see how much you have spent...</p>

          <Button className="ui button one" primary as={NavLink} exact to="/signin">
            Login</Button>
          <Button className="ui button two" primary as={NavLink} exact to="/signup">
            Sign Up
          </Button>
        </Container>
    );
  }
}

export default Landing;

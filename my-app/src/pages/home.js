import React from 'react';
import '../css/home.css';
import HomeBackground from '../images/home-background.jpeg';
import { Container, Image, Button } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
        <Image fluid className="ui fluid image"
               src={HomeBackground}/>
        <p className="slogan1">
          <b>BE MY BUDGET BUDDY!</b>
        </p>
        <p className="slogan2">
          It's time to see how much you have spent...</p>
        <Button className="ui button one">
          Login</Button>
        <Button className="ui button two">
          Sign Up
        </Button>
      </Container>
    )
  }
}

export default Home;



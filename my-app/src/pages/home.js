import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import '../css/home.css';
import Logo from  '../images/menu-logo.png';
import HomeBackground from '../images/home-background.jpeg';
import GithubLogo from '../images/github-logo.png';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Menu, Image, Icon, Search, Button, List, Grid } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (

      <Container>
        <Menu borderless fixed className='ui fixed borderless top menu'>

          <Image className="logo medium item" src={Logo}/>


          <Dropdown className="ui dropdown simple item" placeholder="HOME" >

            <Dropdown.Menu  type='text'>
              <Dropdown.Item>1</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="ui simple dropdown item" text="ABOUT">
            <Dropdown.Menu>
              <Dropdown.Item>hello</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="ui simple dropdown item" text="DATA">
            <Dropdown.Menu>
              <Dropdown.Item>DATA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="ui simple dropdown item" text="CALCULATOR">
            <Dropdown.Menu>
              <Dropdown.Item>CALC</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="ui simple dropdown item" text="TUTORIAL">
            <Dropdown.Menu>
              <Dropdown.Item>A</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item position={'right'}>
            <Search placeholder={'Search...'}
              name='search'/>
          </Menu.Item>
          <Menu.Item>
            <Icon name='user'/>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

class Background extends React.Component {
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

class FooterMenu extends React.Component{
  render(){
    return(
      <Container className="footer-background">
        <Grid divided='vertically'>
          <Grid.Row internally celled columns={3}>

            <Grid.Column>
              <b>Information</b>
              <List link className="ui link list">
                <List.Item as='a'>About Us</List.Item>
                <List.Item as='a'>Message to Our Users</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <b>Need Help?</b>
              <List link className="ui link list">
                <List.Item as='a'>Support</List.Item>

              </List>
            </Grid.Column>

            <Grid.Column>
              <b>Connect</b>
              <List link className="ui link list">
                <List.Item as='a'>Get Started</List.Item>
                <List.Item as='a'>Account</List.Item>
                <List.Item as='a'>Terms and Conditions</List.Item>
                <List.Item as='a'>
                  <Image src={GithubLogo}/>Github Repository</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

class FooterMenuTwo extends React.Component{
  render(){
    return(
      <Container className="ui bottom secondary menu">
        <p className="item">
          <Icon name="copyright outline"/>
          Copyright 2020 BudgetBuddy Inc. All Rights Reserved | Legal Terms | Privacy Policy | Cookie Policy </p>

      </Container>
    )
  }
}



class Home extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <Background/>
        <FooterMenu/>
        <FooterMenuTwo/>
      </div>
    );
  }
}

export default Home;



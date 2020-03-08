import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import '../css/home.css';
import Logo from  '../images/menu-logo.png';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Menu, Image, Icon, Search, Button } from 'semantic-ui-react';


class TopMenu extends React.Component {
  render() {
    return (

      <Container>
        <Menu borderless fixed className='ui fixed borderless top menu'>

          <Image className="logo medium item" src={Logo}/>


          <Dropdown className="ui dropdown simple item" text="HOME" >
            <Dropdown.Menu type='text'>
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
               src="https://wallpapercave.com/wp/8iAP1eI.jpg"/>

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



class Home extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <Background/>
      </div>
    );
  }
}

export default Home;



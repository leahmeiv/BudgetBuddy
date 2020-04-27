import React from 'react';
import { Container, Dropdown, Menu, Image, Icon, Search } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/menu-logo.png';

export default class NavBar extends React.Component {
  render() {
    return (
      <Container>
        <Menu borderless fixed className='ui fixed borderless top menu'>

          <Image className="logo medium item" src={Logo}/>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">HOME</Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/about">ABOUT</Menu.Item>


          <Dropdown className="ui dropdown simple item" text="Test" >
            <Dropdown.Menu type='text'>
              <Dropdown.Item as={NavLink} exact to="/about">About</Dropdown.Item>
              <Dropdown.Item>2</Dropdown.Item>
              <Dropdown.Item>3</Dropdown.Item>
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
    );
  }
}
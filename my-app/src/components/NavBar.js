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


          <Dropdown className="ui simple dropdown item" text="EXPENSES">
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} exact to="/add-budget">Save a Payment</Dropdown.Item>
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
            <Dropdown icon='user'>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} exact to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={NavLink} exact to="/signup">Sign up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
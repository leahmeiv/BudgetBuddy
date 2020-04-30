import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { User } from '/imports/api/user/user'

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.findProfile = this.findProfile.bind(this);
  }

  findProfile() {
    if (Roles.userIsInRole(Meteor.userId(), 'user')) {
      if (this.props.ready) {
        const user = User.find({}).fetch()[0];
        return user._id;
      }
    }
    return '';
  }
  render() {
    const menuStyle = { marginBottom: '10px' };
    return (
      <div>
      {this.props.currentUser !== '' ? (

      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image size='medium' src={'images/menu-logo.png'} />
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='add'>About Us</Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/budgetdash" key='add'>BudgetDash</Menu.Item>


        {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/calculator" key='add'>Calculator</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin/userlist" key='admin'>Users</Menu.Item>
        ) : ''}

        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin/expenseslist" key='admin'>Expenses</Menu.Item>
        ) : ''}

        {Roles.userIsInRole(Meteor.userId(), 'user') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to={`/budgetdash/${this.findProfile()}`} key='add'>BudgetDash</Menu.Item>
        ) : ''}

        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                <Dropdown.Item icon="sign out" text="Edit Profile" as={NavLink} exact to={`/editprofile/${this.findProfile()}`}/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
      ) : ''}
      </div>

    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => {
  const subscription1 = Meteor.subscribe('User');
  const subscription2 = Meteor.subscribe('Expenses');
  return {
    currentUser: Meteor.user() ? Meteor.user().username : '',
    ready: (subscription1.ready() && subscription2.ready() ),
  };
})(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
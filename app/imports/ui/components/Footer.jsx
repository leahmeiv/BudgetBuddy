import React from 'react';
import { Grid, Container, List, Image, Icon, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (

      <Container fixed className="footer-background">
        {this.props.currentUser !== '' ? (

        <div>

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
                  <Image src={'images/github-logo.png'}/>
                  Github Repository</List.Item>
              </List>
            </Grid.Column>

          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row>
            <p className="item">
              <Icon name="copyright outline"/>
              Copyright 2020 BudgetBuddy Inc. All Rights Reserved | Legal Terms | Privacy Policy | Cookie Policy
            </p>
          </Grid.Row>
        </Grid>
        </div>
            ) : ''}

      </Container>

    );
  }
}

/** Declare the types of all properties. */
Footer.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(FooterContainer);

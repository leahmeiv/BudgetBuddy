import React from 'react';
import { Container, Image, Grid, List, Icon } from 'semantic-ui-react';
import GithubLogo from '../../public/github-logo.png';

export default class Footer extends React.Component {
  render() {
    return (
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
        <Grid>
          <Grid.Row>
            <p className="item">
              <Icon name="copyright outline"/>
              Copyright 2020 BudgetBuddy Inc. All Rights Reserved | Legal Terms | Privacy Policy | Cookie Policy
            </p>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

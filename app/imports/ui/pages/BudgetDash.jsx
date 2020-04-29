import React from 'react';
import {Table, Icon, Container, Grid, Header, Segment, Divider} from 'semantic-ui-react';
//import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Expense } from '../components/Expense';


/** A simple static component to render some text for the landing page. */
class BudgetDash extends React.Component {


  render() {
    /*return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  } */
  /*renderPage() { */
      return (
        <Container className="expenses-bg" fluid>
          <Grid columns={2} divided centered padded>
            <Grid.Column width={8} centered>
              <Header as="h2" textAlign="center" inverted>How much have you spent?</Header>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Expense Name</Table.HeaderCell>
                    <Table.HeaderCell><Icon name='dollar sign'/>Cost</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
              </Table>
            </Grid.Column>

            <Grid.Column>
              <Header as='h1' inverted textAlign="center">Current Budget: </Header>
              <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                  <Divider vertical>VS</Divider>

                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                      <Header>
                        Set Budget 
                        <Icon name='money bill alternate outline' />
                      </Header>
                    </Grid.Column>

                    <Grid.Column>
                      <Header>
                        Spent
                        <Icon name='shopping bag' />
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment>
                <Header>Remaining Budget: </Header>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      );
    }
  }

export default BudgetDash;

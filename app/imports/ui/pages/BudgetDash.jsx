import React from 'react';
import {Table, Icon, Container, Grid, Header} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


/** A simple static component to render some text for the landing page. */
class BudgetDash extends React.Component {


  render() {

    return (
      <Container className="expenses-bg" fluid>
      <Grid columns={2} divided centered padded>
        <Grid.Column width={8} centered>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Expenses</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  <Icon name='dollar sign' /> Food
                </Table.Cell>
                <Table.Cell>Gym Membership</Table.Cell>
                <Table.Cell collapsing textAlign='right'>
                  $35
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <Icon name='dollar sign' /> build
                </Table.Cell>
                <Table.Cell>Books</Table.Cell>
                <Table.Cell textAlign='right'>$34</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name='dollar sign' /> Clothes
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column >
          <Header as='h1' inverted textAlign="center">How much have you spent?</Header>
        </Grid.Column>
      </Grid>
      </Container>
    );
  }
}

export default BudgetDash;

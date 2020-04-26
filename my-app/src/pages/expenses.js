import React from 'react';
import '../css/about.css';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import { Container, Form, Header, Table, Button } from 'semantic-ui-react';
import '../css/expenses.css';

class Expenses extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Container fluid className="expenses-bg">
            <Header size="huge" textAlign="center">
              <div className="form-text">Budget Your Expenses</div>
            </Header>

            <Header size="large" textAlign="center">
              <div className="form-text">View your expenses here!</div>
            </Header>
            <Container vertical>
              <Table inverted celled padded>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Name of Expense</Table.HeaderCell>
                    <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                    <Table.HeaderCell>Category of Expense</Table.HeaderCell>
                    <Table.HeaderCell>Additional Information</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Date</Table.Cell>
                    <Table.Cell>Name</Table.Cell>
                    <Table.Cell>Amount</Table.Cell>
                    <Table.Cell>Category</Table.Cell>
                    <Table.Cell>Info</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Date</Table.Cell>
                    <Table.Cell>Name</Table.Cell>
                    <Table.Cell>Amount</Table.Cell>
                    <Table.Cell>Category</Table.Cell>
                    <Table.Cell>Info</Table.Cell>
                  </Table.Row>
                </Table.Body>
                <Table.Footer fullWidth>
                  <Table.Row textAlign='center'>
                    <Table.HeaderCell colSpan='5'>
                      <div className="form-text">Add a new expense</div>
                      <Button circular icon='add' as={Link} to="/add-budget"/>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Container>
          </Container>
        </div>
      </div>
    );
  }
}


export default Expenses;
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Expenses } from '../../api/expenses/expenses';
import AdminExpense from '../components/AdminExpense';

class AdminExpenseList extends React.Component {

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container fluid padded className='admin-bg'>
        <Header as="h2" textAlign="center" inverted>All Expenses (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Expense Name</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.expenses.map((expense) => <AdminExpense key={expense._id} expense={expense} />)}
          </Table.Body>
        </Table>
      </Container>

    );
  }
}

/** Require an array of Expenses documents in the props. */
AdminExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ExpenseAdmin');
  return {
    expenses: Expenses.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminExpenseList);

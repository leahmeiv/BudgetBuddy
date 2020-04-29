import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Expenses} from '../../api/expenses/expenses';
import AdminBudget from '../components/AdminBudget';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminUserList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container fluid padded className='admin-bg'>
        <Header as="h2" textAlign="center" inverted>All Users (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Expense</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Owner's Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.expenses.map((expense) => <AdminUsers key={expense._id} expense={expense} />)}
          </Table.Body>
        </Table>
      </Container>

    );
  }
}

/** Require an array of Stuff documents in the props. */
AdminUserList.propTypes = {
  expenses: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Users documents.
  const subscription = Meteor.subscribe('UserAdmin');
  return {
    budgets: Expense.find({}, { sort: { owner: -1 } }).fetch(),
    ready: subscription.ready(),
  };
})(AdminBudget);

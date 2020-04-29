import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the User list (Admin) table. */
class AdminExpense extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.expense.name}</Table.Cell>
        <Table.Cell>{this.props.expense.amount}</Table.Cell>
        <Table.Cell>{this.props.user.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
AdminExpense.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default AdminExpense;

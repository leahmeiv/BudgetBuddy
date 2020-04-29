import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Expenses } from '../../api/expenses/expenses';

/** Renders a single row in the User list (Admin) table. */
class AdminExpense extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    /* eslint-disable-next-line */
    if (confirm("Do you really want to remove this card?")) {
      Expenses.remove(this.props.expense._id, this.deleteCallBack);
    }
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.expense.name}</Table.Cell>
        <Table.Cell>{this.props.expense.amount}</Table.Cell>
        <Table.Cell>{this.props.expense.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

AdminExpense.propTypes = {
  expense: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};


export default AdminExpense;

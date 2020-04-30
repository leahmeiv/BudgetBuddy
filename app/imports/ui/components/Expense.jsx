import React from 'react';
import { Table, Button, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Expenses } from '../../api/expenses/expenses';


/** Renders a single row in the Expenses table */
export class Expense extends React.Component {
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
    if (confirm("Do you really want to delete this expense?")) {
      Expenses.remove(this.props.expense._id, this.deleteCallBack);
    }
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>
          <Button onClick={this.onClick} icon>
            <Icon name='trash' />
          </Button>
        </Table.Cell>
        <Table.Cell>{this.props.expense.name}</Table.Cell>
        <Table.Cell>{this.props.expense.amount}</Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
Expense.propTypes = {
  expense: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Expense);

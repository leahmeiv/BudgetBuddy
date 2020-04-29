import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { User } from '../../api/user/user';

/** Renders a single row in the User list (Admin) table. */
class AdminUsers extends React.Component {

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
      User.remove(this.props.user._id, this.deleteCallBack);
    }
  }

  render() {
    return (
      <Table.Row>
        /**<Table.Cell>
          <Button icon={'user delete'}
                  onClick={this.onClick}></Button>
        </Table.Cell>*/
        <Table.Cell>{this.props.user.firstName}</Table.Cell>
        <Table.Cell>{this.props.user.lastName}</Table.Cell>
        <Table.Cell>{this.props.user.budget}</Table.Cell>
        <Table.Cell>{this.props.user.owner}</Table.Cell>
      </Table.Row>
    );
  }
}
AdminUsers.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};


export default AdminUsers;

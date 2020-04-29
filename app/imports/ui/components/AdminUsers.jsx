import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the User list (Admin) table. */
class AdminUsers extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.user.firstName}</Table.Cell>
        <Table.Cell>{this.props.user.lastName}</Table.Cell>
        <Table.Cell>{this.props.user.budget}</Table.Cell>
        <Table.Cell>{this.props.user.owner}</Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
AdminUsers.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AdminUsers;

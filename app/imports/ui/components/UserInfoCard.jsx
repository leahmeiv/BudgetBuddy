import React from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { UserInfo } from '/imports/api/user/user';


class UserInfoCard extends React.Component {
  /**

  findBudget() {
    let total = 0;
    for (let i = 0; i < this.props.user.expenses.length; i++) {
      total += this.props.user.expenses[i];
    }
    return Math.round(total);
  }
 */

  render() {
    return (
      <Card raised color="blue">
        <Card.Content>
          <Card.Header>
            <div className="form-text">
              {this.props.userinfo.firstName} {this.props.userinfo.lastName}
            </div>
          </Card.Header>
          <Card.Meta>
            {this.props.userinfo.budget}
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
UserInfoCard.propTypes = {
  userinfo: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserInfoCard);
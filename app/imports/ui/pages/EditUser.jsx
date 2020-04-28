import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { User, UserSchema } from '../../api/user/user';

/** Renders the Page for editing a single document. */
class EditUser extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { firstName, lastName, budget, owner, _id } = data;
    User.update(_id, { $set: { firstName, lastName, budget, owner} }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <div><Loader active>Getting data</Loader></div> ;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Edit User</Header>
          <AutoForm schema={UserSchema} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='firstName'/>
              <TextField name='lastName' />
              <NumField name='budget' decimal={false}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
              <HiddenField name='owner' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}


/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditUser.propTypes = {
  doc: PropTypes.array.isRequired,
  model: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {

  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('User');
  return {
    doc: User.find({}).fetch()[0],
    ready: subscription.ready(),
  };
})(EditUser);
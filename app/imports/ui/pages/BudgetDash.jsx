import React from 'react';
//import { NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { AutoForm, ErrorsField ,NumField, SubmitField, TextField } from 'uniforms-semantic';
import {Table, Icon, Container, Grid, Header, Segment, Divider, Modal, Button, Loader} from 'semantic-ui-react';
import SimpleSchema from 'simpl-schema';
import swal from 'sweetalert';
import { Expense } from '../components/Expense';
import { Expenses } from '../../api/expenses/expenses';

const formSchema = new SimpleSchema({
  name: String,
  amount: Number,
});

/** A simple static component to render some text for the landing page. */
class BudgetDash extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { name, amount} = data;
    const owner = Meteor.user().username;
    Expenses.insert({ name, amount, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
      let fRef = null;
      return (
        <Container className="expenses-bg" fluid>
          <Grid columns={2} divided centered padded>
            <Grid.Column width={8} centered>
              <Header as="h2" textAlign="center" inverted>How much have you spent?</Header>
              <Grid.Row>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Expense Name</Table.HeaderCell>
                      <Table.HeaderCell><Icon name='dollar sign'/>Cost</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {this.props.expense.map((expenses) => <Expense key={expenses._id} expense={expenses} />)}
                  </Table.Body>
                </Table>
              </Grid.Row>
              <Grid.Row>
                <Modal trigger={<Button>Add New Expense</Button>}>
                <Modal.Content>
                  <Grid container centered>
                    <Grid.Column>
                      <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
                        <Segment>
                          <TextField name='name'/>
                          <NumField name='amount' decimal={false}/>
                          <SubmitField value='Submit'/>
                          <ErrorsField/>
                        </Segment>
                      </AutoForm>
                    </Grid.Column>
                  </Grid>
                </Modal.Content>
              </Modal></Grid.Row>
            </Grid.Column>

            <Grid.Column>
              <Header as='h1' inverted textAlign="center">Current Budget: </Header>
              <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                  <Divider vertical>VS</Divider>

                  <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                      <Header>
                        Set Budget 
                        <Icon name='money bill alternate outline' />
                      </Header>
                    </Grid.Column>

                    <Grid.Column>
                      <Header>
                        Spent
                        <Icon name='shopping bag' />
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment>
                <Header>Remaining Budget: </Header>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      );
    }
  }

/** Require an array of Stuff documents in the props. */
BudgetDash.propTypes = {
  expense: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Expenses');
  return {
    expense: Expenses.find({}).fetch(),
    ready: subscription.ready(),
  };
})(BudgetDash);

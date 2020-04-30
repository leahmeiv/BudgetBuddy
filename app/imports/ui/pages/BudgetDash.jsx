import React from 'react';
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
import { User } from '../../api/user/user'

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

  expenseTotal() {
    let total = 0;
    for (let i = 0; i < this.props.expense.length; i++) {
      total += this.props.expense[i].amount;
    }
    return total.toFixed(2);
  }

  budgetLeft(budget, spent) {
      let total = budget-spent;
    return total.toFixed(2);
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
              <Table celled defintion>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
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
                          <NumField name='amount' decimal={true}/>
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
                    <Grid.Row>
                      <Header>
                        Set Budget
                        <Icon name='money bill alternate outline' />
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header as='h2' textAlign="center">
                        <div> ${this.props.user.budget} </div>
                      </Header>
                    </Grid.Row>
                  </Grid.Column>

                  <Grid.Column>
                    <Grid.Row>
                      <Header>
                        Spent <Icon name='shopping bag' />
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header as='h2' textAlign="center">
                        <div>${this.expenseTotal()}</div>
                      </Header>
                    </Grid.Row>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment>
              <Header>
                <div>
                  Remaining Budget: ${this.budgetLeft(this.props.user.budget,this.expenseTotal())}
                </div>
              </Header>
              <Header as='h2' textAlign="center">
              </Header>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
/** Require an array of Stuff documents in the props. */
BudgetDash.propTypes = {
  user: PropTypes.array.isRequired,
  expense: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Expenses');
  const subUser = Meteor.subscribe('User');
  return {
    expense: Expenses.find({}).fetch(),
    user: User.find({}).fetch()[0],
    ready: (subscription.ready() && subUser.ready()),
  };
})(BudgetDash);
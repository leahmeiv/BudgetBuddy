import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Button, Form, Header, Message, Grid, Dropdown, TextArea } from 'semantic-ui-react';
import '../css/add-budget.css';

/* Date Picker: https://github.com/Hacker0x01/react-datepicker
 * the package needs to be installed via npm:
 * npm install react-datepicker --save
 * or via yarn:
 * yarn add react-datepicker */
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const categoryOptions = [
  { value: 'Groceries', text: 'Groceries' },
  { value: 'Home and Auto', text: 'Home & Auto' },
  { value: 'Bills', text: 'Bills' },
  { value: 'Dining Out', text: 'Dining Out' },
  { value: 'Gifts', text: 'Gifts' },
  { value: 'Miscellaneous', text: 'Miscellaneous' }
];

const msgMargin = { margin: '15px 0px 0px 0px' };

class AddBudget extends React.Component {
  /* https://github.com/Hacker0x01/react-datepicker */
  state = { paymentDate: new Date() };
  handleChange = date => {
    this.setState({
      paymentDate: date
    });
  };

  render() {
    return (
      <div>
        <div>
          <Container fluid className="add-budget-bg">
            <Header size="huge" textAlign="center">
              <div className="form-text">Budget Your Expenses</div>
            </Header>

            <Header size="large" textAlign="center">
              <div className="form-text">Add a new payment here!</div>
            </Header>
            <Container vertical>
              <Grid columns={2}>
                <Grid.Column>
                  <Form className="form-text">
                    <Form.Field className="form-text">
                      <div className="form-text">Name of Payment</div>
                      <input placeholder="What did you pay for?"/>
                    </Form.Field>
                    <Form.Field>
                      <label>
                        <div className="form-text">Category of Expense</div>
                      </label>
                      <Dropdown
                        placeholder='What did you pay for?'
                        fluid selection
                        options={categoryOptions}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>
                        <div className="form-text">Additional information</div>
                      </label>
                      <TextArea placeholder="More information about your spending"/>
                    </Form.Field>
                    <Button inverted color="white" type="submit">Save Payment</Button>
                  </Form>
                </Grid.Column>
                <Grid.Column>
                  <Grid.Row>
                    <Form className="form-text">
                      <Form.Field>
                        <label>
                          <div className="form-text">Amount paid</div>
                        </label>
                        <input placeholder="How much did you pay?"/>
                      </Form.Field>
                      <Form.Field>
                        <label>
                          <div className="form-text">Date</div>
                        </label>
                        {/* https://github.com/Hacker0x01/react-datepicker */}
                        <DatePicker
                          selected={this.state.paymentDate}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Form>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
              <Message info attached="bottom" style={msgMargin}>
                View your expense report <Link to="/expenses">here</Link>
              </Message>
            </Container>
          </Container>

        </div>
      </div>
    );
  }
}


export default AddBudget;
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

class BudgetBuddy extends React.Component {

  render() {
    return (
      <Container textAlign="center">
    <Header as='h1'>Island Snow!</Header>
    </Container>
  );
  }
}

ReactDOM.render(<BudgetBuddy/>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';



class BudgetBuddy extends React.Component {

  render() {
    return (
      <h1>Budget Buddy!</h1>
    );
  }
}

ReactDOM.render(<BudgetBuddy />, document.getElementById('root'));

// export default BudgetBuddy

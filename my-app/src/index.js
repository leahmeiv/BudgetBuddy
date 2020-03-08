import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Home from './pages/home.js';
import Background from './pages/home.js';


class BudgetBuddy extends React.Component {

  render() {
    return (
      <div>
        <Home/>
      </div>
  );
  }
}

ReactDOM.render(<BudgetBuddy/>, document.getElementById('root'));

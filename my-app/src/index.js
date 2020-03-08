import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import 'semantic-ui-css/semantic.min.css';
// import { Container, Header } from 'semantic-ui-react';
// import Home from './pages/home.js';
import About from './pages/about.js';
// import App from './App'

class BudgetBuddy extends React.Component {

  render() {
    return (
      <div>
        <About/>
      </div>
  );
  }
}


ReactDOM.render(<BudgetBuddy />, document.getElementById('root'));
